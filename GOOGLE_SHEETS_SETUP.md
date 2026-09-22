# Google Sheets Integration Guide for Counselors

This guide explains how to automatically log every student counseling submission from the website into a live **Google Sheet** accessible by the COSMOVERTEX counseling team.

---

## 🛠 3-Minute Setup

### Step 1: Create a Google Sheet
1. Open Google Sheets: [sheets.new](https://sheets.new)
2. Rename the document at top left to:  
   **`COSMOVERTEX — Student Counseling Inquiries`**

---

### Step 2: Open Google Apps Script
1. In the top menu, click **Extensions** > **Apps Script**.
2. Delete any existing code inside the editor (`function myFunction() { ... }`).
3. Open the file [`scripts/google-sheet-counseling-script.gs`](file:///e:/DOS/cosmovertex/scripts/google-sheet-counseling-script.gs) in this repository.
4. Copy the entire contents of that file and paste it into the Google Apps Script editor.
5. Click the **Save** icon (💾) or press `Ctrl + S`.

---

### Step 3: Deploy as Web App
1. At the top right of Apps Script, click the blue **Deploy** button > **New deployment**.
2. Click the **gear icon** (⚙️) next to "Select type" and select **Web app**.
3. Fill in the fields:
   - **Description**: `COSMOVERTEX Counseling Lead Sync`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial so Next.js can send submissions without OAuth prompts)*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click *Review permissions*.
   - Select your Google account.
   - Click *Advanced* > *Go to Untitled project (unsafe)* (standard for personal scripts).
   - Click *Allow*.
6. Copy the generated **Web app URL** (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Add the URL to Environment Variables
1. Open your `.env.local` file (and add it to your Vercel Project Environment Variables for production).
2. Set:
   ```bash
   GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
   ```
3. Restart your dev server or redeploy to Vercel.

---

## 📋 What Gets Logged Automatically

Every time a student clicks **"Confirm My Free Counseling Session"**, a new row is appended with:

| Column | Description |
|---|---|
| **Submission Time** | Formatted Bangladesh Standard Time (BST) |
| **Full Name** | Student's full name |
| **Phone / WhatsApp** | Verified mobile number |
| **Email** | Email address (if provided) |
| **Service Requested** | *Complete Pathway*, *Study Abroad Only*, or *English Test Prep* |
| **Counseling Mode** | *Banani Office* or *Online Video/Call* |
| **Target Destination** | USA, UK, Canada, Australia, New Zealand, South Korea, Malaysia & Pathways, or Europe (Lithuania, Slovenia, Greece, Hungary, Sweden, Finland, Italy) |
| **Degree Level** | Bachelor's, Master's, Diploma, PhD |
| **Planned Intake** | Fall / September, Spring / March, Summer, etc. |
| **English Test** | Duolingo English Test (DET), CEFR C1 Advanced – EnglishScore, EF SET, IELTS, PTE |
| **Coaching Format** | Small Cohort Batch, Crash Course, 1-on-1 VIP, etc. |
| **Academic Background** | HSC, A-Levels, Completed Bachelor's, Working, etc. |
| **Student Notes** | Dream universities, questions, or specific score goals |
| **Status** | Default set to `New Lead` |
| **Follow-up Counselor** | Blank cell ready for counselor assignment |
| **Counselor Remarks** | Blank cell ready for notes during/after consultation |

The spreadsheet header will be automatically generated with styling (Navy brand color `#0A2342`, white bold text, and a frozen header row).
