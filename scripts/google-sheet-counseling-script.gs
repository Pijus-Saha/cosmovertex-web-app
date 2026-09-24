/**
 * COSMOVERTEX — Student Counseling Google Sheets Integration
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Rename sheet to: "COSMOVERTEX Counseling Leads"
 * 3. In the top menu, go to: Extensions > Apps Script
 * 4. Replace everything in the script editor with this code.
 * 5. Click "Save" (Floppy icon).
 * 6. Click "Deploy" > "New deployment".
 * 7. Click the gear icon next to "Select type" and choose "Web app".
 * 8. Set:
 *    - Description: "COSMOVERTEX Web Lead Sync"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 9. Click "Deploy", authorize permissions when prompted.
 * 10. Copy the "Web app URL" and paste into your project's .env.local:
 *     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent requests

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName("Counseling Leads");
    
    if (!sheet) {
      sheet = spreadsheet.getActiveSheet();
      sheet.setName("Counseling Leads");
    }

    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);

    // If sheet is empty, create headers with professional styling
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Submission Time",
        "Full Name",
        "Phone / WhatsApp",
        "Email",
        "Service Requested",
        "Counseling Mode",
        "Target Destination",
        "Degree Level",
        "Planned Intake",
        "English Test",
        "Coaching Format",
        "Academic Background",
        "Student Notes",
        "Status",
        "Follow-up Counselor",
        "Counselor Remarks"
      ];

      sheet.appendRow(headers);

      // Style header row (COSMOVERTEX Navy background, white bold text)
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#0A2342");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(11);
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 40);
      sheet.setFrozenRows(1);
    }

    // Append student row
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }),
      data.fullName || "",
      data.phoneNumber || "",
      data.email || "",
      data.serviceRequested || "",
      data.counselingMode || "",
      data.targetDestination || "",
      data.studyLevel || "",
      data.targetIntake || "",
      data.preferredTest || "",
      data.coachingFormat || "",
      data.academicBackground || "",
      data.notes || "",
      data.leadStatus || "New Lead",
      "", // Assigned Counselor (blank for team to fill)
      ""  // Remarks (blank for team to fill)
    ]);

    // Format new row styling
    const newRow = sheet.getLastRow();
    const rowRange = sheet.getRange(newRow, 1, 1, 16);
    rowRange.setFontSize(10);
    rowRange.setVerticalAlignment("middle");

    // Auto-fit column widths if below row 10
    if (newRow <= 10) {
      for (var col = 1; col <= 16; col++) {
        sheet.autoResizeColumn(col);
      }
    }

    // Send instant email notification to counselor
    if (ENABLE_EMAIL_NOTIFICATIONS) {
      sendLeadEmailNotification(data, spreadsheet.getUrl());
    }

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: newRow, emailSent: ENABLE_EMAIL_NOTIFICATIONS })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Optional: Instant Email Notification Configuration
 * When enabled, Google Apps Script sends an immediate email alert via your Google account
 * to the counselor/admin whenever a new inquiry is submitted.
 */
var ENABLE_EMAIL_NOTIFICATIONS = true;
var FALLBACK_NOTIFICATION_EMAIL = "info@cosmovertex.com";

function sendLeadEmailNotification(data, spreadsheetUrl) {
  try {
    var recipient = data.notificationEmail || FALLBACK_NOTIFICATION_EMAIL;
    if (!recipient) {
      recipient = Session.getActiveUser().getEmail();
    }
    if (!recipient) return;

    var fullName = data.fullName || "Prospective Student";
    var phone = data.phoneNumber || "N/A";
    var cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    if (cleanPhone.startsWith("01")) {
      cleanPhone = "88" + cleanPhone;
    } else if (cleanPhone.startsWith("+8801")) {
      cleanPhone = cleanPhone.replace("+", "");
    }

    var service = data.serviceRequested || "General Study Abroad Inquiry";
    var subject = "🚨 [New Lead] " + fullName + " (" + service + ") — " + phone;

    var html = '<div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;color:#1e293b;">';
    
    // Header
    html += '<div style="background:linear-gradient(135deg,#0A2342 0%,#0f325e 100%);padding:28px 24px;text-align:center;color:#ffffff;">';
    html += '<div style="display:inline-block;padding:5px 12px;background:rgba(16,185,129,0.25);border:1px solid rgba(16,185,129,0.5);border-radius:9999px;font-size:11px;font-weight:700;color:#34d399;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">New Website Lead</div>';
    html += '<h2 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">' + fullName + '</h2>';
    html += '<p style="margin:6px 0 0;font-size:14px;color:#94a3b8;">' + service + '</p>';
    html += '</div>';

    // Details Table
    html += '<div style="padding:24px;">';
    html += '<table style="width:100%;border-collapse:collapse;font-size:14px;">';
    
    var rows = [
      ["Phone / WhatsApp", '<a href="tel:' + phone + '" style="color:#059669;font-weight:bold;text-decoration:none;">' + phone + '</a>'],
      ["Email", data.email ? '<a href="mailto:' + data.email + '">' + data.email + '</a>' : "Not provided"],
      ["Counseling Mode", data.counselingMode || "Not Specified"],
      ["Target Destination", data.targetDestination || "N/A"],
      ["Degree / Study Level", data.studyLevel || "N/A"],
      ["Target Intake", data.targetIntake || "N/A"],
      ["Preferred Test", data.preferredTest || "N/A"],
      ["Coaching Format", data.coachingFormat || "N/A"],
      ["Academic Background", data.academicBackground || "N/A"],
      ["Student Notes", data.notes || "None"],
      ["Submission Time", data.submittedAt || new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" })]
    ];

    for (var i = 0; i < rows.length; i++) {
      var bg = (i % 2 === 1) ? 'background-color:#f8fafc;' : '';
      html += '<tr style="border-bottom:1px solid #f1f5f9;' + bg + '">';
      html += '<td style="padding:10px 8px;font-size:12px;font-weight:600;color:#64748b;width:38%;">' + rows[i][0] + '</td>';
      html += '<td style="padding:10px 8px;font-size:14px;color:#0f172a;">' + rows[i][1] + '</td>';
      html += '</tr>';
    }
    html += '</table>';

    // Action Buttons
    html += '<div style="margin-top:24px;text-align:center;">';
    html += '<a href="https://wa.me/' + cleanPhone + '" style="display:inline-block;padding:12px 24px;margin:4px;background-color:#25D366;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:10px;">💬 Open WhatsApp Chat</a> ';
    if (spreadsheetUrl) {
      html += '<a href="' + spreadsheetUrl + '" style="display:inline-block;padding:12px 24px;margin:4px;background-color:#0A2342;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:10px;">📊 View in Google Sheet</a>';
    }
    html += '</div>';

    html += '</div>';
    html += '<div style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 24px;text-align:center;font-size:11px;color:#94a3b8;">COSMOVERTEX International Lead Delivery</div>';
    html += '</div>';

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: html
    });
  } catch (err) {
    Logger.log("Failed to send email notification: " + err.toString());
  }
}
