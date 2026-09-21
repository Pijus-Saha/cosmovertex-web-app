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

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: newRow })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}
