const http = require('http');

const pages = [
  '/',
  '/contact',
  '/gallery',
  '/services',
  '/destinations/australia',
  '/destinations/malaysia'
];

function fetchHtml(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });
}

(async () => {
  console.log('====================================================');
  console.log('       UI & UX ACCESSIBILITY (WCAG) AUDIT ENGINE    ');
  console.log('====================================================\n');

  for (const p of pages) {
    const html = await fetchHtml(p);
    console.log(`Auditing Page: ${p}`);

    // Check h1
    const h1s = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    if (h1s.length === 1) {
      console.log('  ✅ [PASS] Heading Structure: Exactly 1 <h1> tag present.');
    } else {
      console.log(`  ⚠️ [WARN] Found ${h1s.length} <h1> tags.`);
    }

    // Check images missing alt
    const imgsWithoutAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/gi) || []);
    if (imgsWithoutAlt.length === 0) {
      console.log('  ✅ [PASS] Images: All <img> elements have an alt attribute.');
    } else {
      console.log(`  ⚠️ [WARN] Found ${imgsWithoutAlt.length} images without alt attributes.`);
    }

    // Check buttons missing accessible text or aria-label
    const emptyButtons = [];
    const buttons = html.match(/<button[^>]*>[\s\S]*?<\/button>/gi) || [];
    for (const b of buttons) {
      const hasAria = /aria-label=/i.test(b) || /title=/i.test(b);
      const text = b.replace(/<[^>]+>/g, '').trim();
      if (!hasAria && text.length === 0) {
        emptyButtons.push(b.substring(0, 50));
      }
    }
    if (emptyButtons.length === 0) {
      console.log('  ✅ [PASS] Interactive Buttons: All buttons provide accessible labels.');
    } else {
      console.log(`  ⚠️ [WARN] Found ${emptyButtons.length} buttons without text or aria-label:`, emptyButtons);
    }

    console.log('');
  }
})();
