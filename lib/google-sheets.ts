export interface GoogleSheetLeadPayload {
  submittedAt: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceRequested: string;
  counselingMode: string;
  targetDestination: string;
  studyLevel: string;
  targetIntake: string;
  preferredTest: string;
  coachingFormat: string;
  academicBackground: string;
  notes: string;
  leadStatus?: string;
  clientIp?: string;
  notificationEmail?: string;
}

/**
 * Sync lead submission to Google Sheet via Google Apps Script Webhook.
 * Fails gracefully if GOOGLE_SHEET_WEBHOOK_URL is not configured or times out.
 */
export async function syncLeadToGoogleSheet(
  payload: GoogleSheetLeadPayload
): Promise<{ success: boolean; error?: string; skipped?: boolean }> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim();

  if (!webhookUrl || webhookUrl === "your_google_apps_script_url_here") {
    return {
      success: false,
      skipped: true,
      error: "GOOGLE_SHEET_WEBHOOK_URL is not configured.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      // 8-second timeout to prevent blocking Next.js responses
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      return {
        success: false,
        error: `Google Sheets endpoint returned status ${response.status}: ${errorText}`,
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error connecting to Google Sheets.";
    return { success: false, error: errorMessage };
  }
}
