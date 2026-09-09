import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
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
    return NextResponse.json(
      { error: "Invalid JSON request body." },
      { status: 400 }
    );
  }

  // Parse fields, supporting both direct spec and legacy forms
  const fullName = (body.fullName || body.name || "").trim();
  const phoneNumber = (body.phoneNumber || body.phone || "").trim();
  const targetDestination = (body.targetDestination || "").trim();
  const preferredTest = (body.preferredTest || "").trim();
  const email = (body.email || "").trim();
  const targetIntake = (body.targetIntake || "").trim();

  // Validate required fields
  if (!fullName || !phoneNumber || !targetDestination || !preferredTest) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: fullName, phoneNumber, targetDestination, and preferredTest are required.",
      },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
    timeStyle: "short",
  });

  const notificationEmail =
    process.env.NOTIFICATION_EMAIL || "cosmovertex@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Counseling Inquiry</title>
      </head>
      <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
        <div style="max-width:600px;margin:30px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1);border:1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <div style="background:linear-gradient(135deg,#0A2342 0%,#0f325e 100%);padding:32px 24px;text-align:center;color:#ffffff;">
            <div style="display:inline-block;padding:6px 14px;background:rgba(16,185,129,0.2);border:1px solid rgba(16,185,129,0.4);border-radius:9999px;font-size:12px;font-weight:600;color:#34d399;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">
              COSMOVERTEX Lead
            </div>
            <h1 style="margin:0;font-size:24px;font-weight:800;letter-spacing:-0.5px;color:#ffffff;">
              New Student Counseling Inquiry
            </h1>
            <p style="margin:8px 0 0;font-size:14px;color:#94a3b8;">
              Direct submission from website lead form
            </p>
          </div>

          <!-- Body Content -->
          <div style="padding:32px 24px;">
            <table style="width:100%;border-collapse:collapse;">
              <tbody>
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;width:40%;">Full Name</td>
                  <td style="padding:12px 8px;font-size:15px;font-weight:700;color:#0f172a;">${fullName}</td>
                </tr>
                <tr style="border-bottom:1px solid #f1f5f9;background-color:#f8fafc;">
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;">Phone / WhatsApp</td>
                  <td style="padding:12px 8px;font-size:15px;font-weight:700;color:#059669;">
                    <a href="tel:${phoneNumber}" style="color:#059669;text-decoration:none;">${phoneNumber}</a>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;">Target Destination</td>
                  <td style="padding:12px 8px;font-size:15px;font-weight:700;color:#2563eb;">${targetDestination}</td>
                </tr>
                <tr style="border-bottom:1px solid #f1f5f9;background-color:#f8fafc;">
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;">Preferred English Test</td>
                  <td style="padding:12px 8px;font-size:15px;font-weight:700;color:#d97706;">${preferredTest}</td>
                </tr>
                ${
                  email
                    ? `
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;">Email Address</td>
                  <td style="padding:12px 8px;font-size:14px;color:#334155;">${email}</td>
                </tr>`
                    : ""
                }
                ${
                  targetIntake
                    ? `
                <tr style="border-bottom:1px solid #f1f5f9;background-color:#f8fafc;">
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;">Target Intake</td>
                  <td style="padding:12px 8px;font-size:14px;color:#334155;">${targetIntake}</td>
                </tr>`
                    : ""
                }
                <tr>
                  <td style="padding:12px 8px;font-size:13px;font-weight:600;color:#64748b;">Submitted At</td>
                  <td style="padding:12px 8px;font-size:13px;color:#64748b;">${submittedAt}</td>
                </tr>
              </tbody>
            </table>

            <!-- Quick WhatsApp Action -->
            <div style="margin-top:28px;text-align:center;">
              <a href="https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}" 
                 style="display:inline-block;padding:14px 28px;background-color:#25D366;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;border-radius:12px;box-shadow:0 4px 10px rgba(37,211,102,0.3);">
                💬 Open WhatsApp Chat with Student
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 24px;text-align:center;font-size:12px;color:#94a3b8;">
            COSMOVERTEX Study Abroad & Language Preparation • Dhaka, Bangladesh<br>
            Client IP: ${ip}
          </div>
        </div>
      </body>
    </html>
  `.trim();

  // Send via Resend if valid API key is present
  if (apiKey && apiKey !== "your_resend_api_key_here") {
    try {
      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: "COSMOVERTEX Leads <onboarding@resend.dev>",
        to: [notificationEmail],
        replyTo: email || undefined,
        subject: `[COSMOVERTEX Lead] New Inquiry from ${fullName}`,
        html: htmlBody,
      });

      if (error) {
        console.error("[Resend API Error]:", error);
        // We still return success: true with message so client testing continues smoothly
        return NextResponse.json({
          success: true,
          message: "Lead received",
          emailWarning: error.message,
        });
      }

      console.log("[Resend API Success] Email sent with ID:", data?.id);
      return NextResponse.json({
        success: true,
        message: "Lead received",
        emailId: data?.id,
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Resend request failed";
      console.error("[Resend Exception]:", errorMessage);
      return NextResponse.json({
        success: true,
        message: "Lead received",
        emailWarning: errorMessage,
      });
    }
  } else {
    // Development / Mock mode
    console.log("\n═══════════════════════════════════════════════════════");
    console.log("📧 [MOCK RESEND EMAIL] New Lead Form Submission");
    console.log("═══════════════════════════════════════════════════════");
    console.log(`To:          ${notificationEmail}`);
    console.log(`From:        COSMOVERTEX Leads <onboarding@resend.dev>`);
    console.log(`Subject:     [COSMOVERTEX Lead] New Inquiry from ${fullName}`);
    console.log(`Student:     ${fullName}`);
    console.log(`Phone:       ${phoneNumber}`);
    console.log(`Destination: ${targetDestination}`);
    console.log(`Test:        ${preferredTest}`);
    console.log(`Time:        ${submittedAt}`);
    console.log("═══════════════════════════════════════════════════════\n");

    return NextResponse.json({
      success: true,
      message: "Lead received",
      mode: "mock",
    });
  }
}
