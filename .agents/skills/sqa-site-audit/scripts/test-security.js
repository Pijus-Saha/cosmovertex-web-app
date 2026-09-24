const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(f)) getFiles(full, files);
    } else if (/\.(tsx|ts|js|jsx)$/.test(f)) files.push(full);
  }
  return files;
}

const files = getFiles('.');
let blankIssues = [];
let innerHtmlIssues = [];
let secretIssues = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Check target='_blank'
  const blankRegex = /<a[^>]*target=["']_blank["'][^>]*>/gi;
  let match;
  while ((match = blankRegex.exec(content)) !== null) {
    if (!match[0].includes('rel=') || (!match[0].includes('noopener') && !match[0].includes('noreferrer'))) {
      blankIssues.push({ file, snippet: match[0] });
    }
  }
  // Check dangerouslySetInnerHTML outside schema
  if (content.includes('dangerouslySetInnerHTML')) {
    if (!file.includes('layout.tsx')) {
      innerHtmlIssues.push(file);
    }
  }
  // Check client secret leakage
  if (content.includes('NEXT_PUBLIC_RESEND') || content.includes('NEXT_PUBLIC_SECRET')) {
    secretIssues.push(file);
  }
}

console.log('--- SECURITY AUDIT REPORT ---');
console.log('Unsafe Target Blanks:', blankIssues.length);
blankIssues.forEach(i => console.log('  [-]', i.file, i.snippet));
console.log('Unsafe InnerHTML:', innerHtmlIssues.length);
innerHtmlIssues.forEach(i => console.log('  [-]', i));
console.log('Exposed Client Secrets:', secretIssues.length);
secretIssues.forEach(i => console.log('  [-]', i));
