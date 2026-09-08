import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (resets on server restart / cold start)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  // Rate limit
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": "3600" },
      }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    name,
    phone,
    email,
    preferredTest,
    targetDestination,
    academicBackground,
  } = body;

  // Basic server-side validation
  if (!name || !phone || !preferredTest || !targetDestination || !academicBackground) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
    timeStyle: "short",
  });

  const emailText = `
New Lead — COSMOVERTEX Website

Name:                ${name}
Phone / WhatsApp:    ${phone}
Email:               ${email || "Not provided"}
Preferred Test:      ${preferredTest}
Target Destination:  ${targetDestination}
Academic Background: ${academicBackground}

Submitted at: ${submittedAt}
IP: ${ip}
  `.trim();

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    // Live mode — send via Resend
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@cosmovertex.edu.bd",
        to: ["cosmovertex@gmail.com"],
        replyTo: email || undefined,
        subject: `New Lead: ${name} — ${preferredTest} → ${targetDestination}`,
        text: emailText,
        html: `
          <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:12px;">
            <div style="background:#0A2342;color:white;padding:20px;border-radius:10px 10px 0 0;text-align:center;">
              <p style="margin:0;font-size:20px;">🎓 New Counseling Request</p>
              <p style="margin:4px 0 0;opacity:0.7;font-size:13px;">COSMOVERTEX</p>
            </div>
            <div style="background:white;padding:24px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0;border-top:none;">
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr><td style="padding:8px;color:#64748b;width:160px;">Name</td><td style="padding:8px;font-weight:600;color:#0A2342;">${name}</td></tr>
                <tr style="background:#f8fafc;"><td style="padding:8px;color:#64748b;">Phone/WhatsApp</td><td style="padding:8px;font-weight:600;color:#0A2342;"><a href="tel:${phone}" style="color:#059669;">${phone}</a></td></tr>
                <tr><td style="padding:8px;color:#64748b;">Email</td><td style="padding:8px;color:#0A2342;">${email || "—"}</td></tr>
                <tr style="background:#f8fafc;"><td style="padding:8px;color:#64748b;">Preferred Test</td><td style="padding:8px;font-weight:600;color:#0A2342;">${preferredTest}</td></tr>
                <tr><td style="padding:8px;color:#64748b;">Destination</td><td style="padding:8px;font-weight:600;color:#0A2342;">${targetDestination}</td></tr>
                <tr style="background:#f8fafc;"><td style="padding:8px;color:#64748b;vertical-align:top;">Academic Background</td><td style="padding:8px;color:#0A2342;">${academicBackground}</td></tr>
              </table>
              <div style="margin-top:20px;padding:12px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;">
                <p style="margin:0;font-size:12px;color:#059669;">Submitted: ${submittedAt}</p>
              </div>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="display:inline-block;margin-top:16px;padding:10px 20px;background:#25D366;color:white;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
                💬 Reply on WhatsApp
              </a>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("[Resend] Error:", error);
        return NextResponse.json(
          { error: "Email delivery failed." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, mode: "live" });
    } catch (err) {
      console.error("[Resend] Exception:", err);
      return NextResponse.json(
        { error: "Internal server error." },
        { status: 500 }
      );
    }
  } else {
    // Mock mode — log to console for development
    console.log("\n═══════════════════════════════════════");
    console.log("📧 [MOCK] New Lead Form Submission");
    console.log("═══════════════════════════════════════");
    console.log(emailText);
    console.log("═══════════════════════════════════════\n");
    console.log(
      "⚠️  Set RESEND_API_KEY environment variable to enable live email sending."
    );

    return NextResponse.json({ success: true, mode: "mock" });
  }
}
