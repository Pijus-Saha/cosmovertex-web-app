const http = require('http');

async function sendRequest(payload, headers = {}) {
  return new Promise((resolve, reject) => {
    const data = typeof payload === 'string' ? payload : JSON.stringify(payload);
    const req = http.request(
      'http://localhost:3000/api/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
          ...headers,
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(body), raw: body });
          } catch {
            resolve({ status: res.statusCode, raw: body });
          }
        });
      }
    );
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function runBlackBoxTests() {
  console.log('====================================================');
  console.log('       BLACK BOX API RESILIENCE & EDGE TESTING      ');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  // Case 1: Invalid JSON
  try {
    const res = await sendRequest('{invalid_json');
    if (res.status === 400 && res.body?.error) {
      console.log('✅ [PASS] Case 1: Malformed JSON handled with 400 Bad Request');
      passed++;
    } else {
      console.error('❌ [FAIL] Case 1: Malformed JSON response:', res);
      failed++;
    }
  } catch (e) {
    console.error('❌ [FAIL] Case 1 network error:', e.message);
    failed++;
  }

  // Case 2: Missing required name
  try {
    const res = await sendRequest({ phoneNumber: '01711223344' });
    if (res.status === 400 && res.body?.error?.includes('Full Name')) {
      console.log('✅ [PASS] Case 2: Missing Full Name rejected with 400 Bad Request');
      passed++;
    } else {
      console.error('❌ [FAIL] Case 2: Missing name check failed:', res);
      failed++;
    }
  } catch (e) {
    console.error('❌ [FAIL] Case 2 network error:', e.message);
    failed++;
  }

  // Case 3: Missing phone number
  try {
    const res = await sendRequest({ fullName: 'John Doe' });
    if (res.status === 400 && res.body?.error?.includes('Phone')) {
      console.log('✅ [PASS] Case 3: Missing Phone Number rejected with 400 Bad Request');
      passed++;
    } else {
      console.error('❌ [FAIL] Case 3: Missing phone check failed:', res);
      failed++;
    }
  } catch (e) {
    console.error('❌ [FAIL] Case 3 network error:', e.message);
    failed++;
  }

  // Case 4: Minimal valid lead
  try {
    const res = await sendRequest({ fullName: 'Minimal Lead', phoneNumber: '+880 1316-318387' });
    if (res.status === 200 && res.body?.success) {
      console.log('✅ [PASS] Case 4: Minimal valid lead accepted with 200 OK');
      passed++;
    } else {
      console.error('❌ [FAIL] Case 4: Minimal valid lead failed:', res);
      failed++;
    }
  } catch (e) {
    console.error('❌ [FAIL] Case 4 network error:', e.message);
    failed++;
  }

  // Case 5: Full comprehensive lead with Bengali characters & special notes
  try {
    const res = await sendRequest({
      fullName: 'মাহমুদুল হাসান (Mahmudul Hasan)',
      phoneNumber: '01819-000000',
      email: 'mahmudul@example.com',
      serviceType: 'all_in_one',
      counselingMode: 'banani',
      targetDestination: 'Australia',
      studyLevel: 'Bachelor\'s Degree',
      targetIntake: 'Spring / February Intake',
      preferredTest: 'Duolingo English Test (DET)',
      coachingFormat: 'Crash Course (4 Weeks)',
      academicBackground: 'HSC 2024 (GPA 5.00)',
      notes: '<script>alert(1)</script> Interested in AI & Software Engineering in Sydney.'
    });
    if (res.status === 200 && res.body?.success) {
      console.log('✅ [PASS] Case 5: UTF-8 & sanitized edge payload processed cleanly');
      passed++;
    } else {
      console.error('❌ [FAIL] Case 5: Edge payload failed:', res);
      failed++;
    }
  } catch (e) {
    console.error('❌ [FAIL] Case 5 network error:', e.message);
    failed++;
  }

  console.log(`\nResults: ${passed} Passed, ${failed} Failed`);
}

runBlackBoxTests();
