#!/usr/bin/env node
/**
 * Automated SQA Static & Sanity Audit Script
 * Scans components and pages for common bugs, anti-patterns, accessibility defects,
 * and security issues.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '../../../..');
const SCAN_DIRS = ['app', 'components', 'lib'];

console.log('====================================================');
console.log('      COSMOVERTEX SQA AUTOMATED AUDIT ENGINE        ');
console.log('====================================================\n');

const findings = {
  critical: [],
  high: [],
  medium: [],
  low: [],
  passed: []
};

// Helper: recursively collect all ts, tsx, js files
function getSourceFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        getSourceFiles(fullPath, fileList);
      }
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = SCAN_DIRS.flatMap(d => getSourceFiles(path.join(ROOT_DIR, d)));
console.log(`[+] Scanned ${allFiles.length} source files across: ${SCAN_DIRS.join(', ')}\n`);

// 1. Audit Target Blanks for rel="noopener noreferrer"
allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT_DIR, file);

  // 1. Check target="_blank" without rel="noopener noreferrer"
  const blankRegex = /<a[^>]*target=["']_blank["'][^>]*>/gi;
  let match;
  while ((match = blankRegex.exec(content)) !== null) {
    if (!match[0].includes('rel=') || (!match[0].includes('noopener') && !match[0].includes('noreferrer'))) {
      findings.medium.push({
        file: relPath,
        rule: 'Security: External Link',
        issue: `External link with target="_blank" missing rel="noopener noreferrer": ${match[0].substring(0, 60)}...`
      });
    }
  }

  // 2. Audit Raw <img> tags instead of next/image
  const imgRegex = /<img\s+[^>]*src=[^>]*>/gi;
  while ((match = imgRegex.exec(content)) !== null) {
    findings.medium.push({
      file: relPath,
      rule: 'Performance: Raw <img> Tag',
      issue: `Found raw <img> tag. Prefer next/image for automatic WebP conversion and zero CLS.`
    });
  }

  // 3. Audit Hardcoded Intake Years
  const intakeYearRegex = /(Fall|Spring|Summer|Winter|Sept|Intake)\s*(202[0-9]|Intake\s+202[0-9])/gi;
  while ((match = intakeYearRegex.exec(content)) !== null) {
    findings.high.push({
      file: relPath,
      rule: 'Business Logic: Hardcoded Intake Year',
      issue: `Found hardcoded intake year "${match[0]}". Planned intakes must be yearless (e.g. "Fall / September Intake").`
    });
  }

  // 4. Audit Unnormalized WhatsApp Links (e.g., wa.me/01...)
  const waRegex = /wa\.me\/01[0-9]{9}/gi;
  while ((match = waRegex.exec(content)) !== null) {
    findings.high.push({
      file: relPath,
      rule: 'Functional: Broken WhatsApp Link',
      issue: `Direct WhatsApp link "${match[0]}" uses domestic 01... instead of international 8801... format.`
    });
  }

  // 5. Audit Buttons without type attribute inside forms
  if (file.includes('Form')) {
    const btnWithoutType = /<button(?![^>]*type=)[^>]*>/gi;
    while ((match = btnWithoutType.exec(content)) !== null) {
      findings.low.push({
        file: relPath,
        rule: 'HTML Semantics: Button Type',
        issue: `Button in form component missing explicit type attribute (type="button" or type="submit").`
      });
    }
  }
});

// 6. Test Next.js Build
console.log('[*] Testing production build compilation...');
try {
  const buildOutput = execSync('npx next build', { cwd: ROOT_DIR, stdio: 'pipe' }).toString();
  findings.passed.push('Production build compiles cleanly with zero TypeScript or route compilation errors.');
} catch (err) {
  findings.critical.push({
    file: 'next build',
    rule: 'Build System: Production Failure',
    issue: `npm run build failed: ${err.message}`
  });
}

// Summary Output
console.log('\n--- SQA AUDIT SUMMARY ---');
console.log(`Critical (P0): ${findings.critical.length}`);
console.log(`High (P1):     ${findings.high.length}`);
console.log(`Medium (P2):   ${findings.medium.length}`);
console.log(`Low (P3):      ${findings.low.length}`);
console.log(`Passed Checks: ${findings.passed.length}\n`);

if (findings.critical.length > 0) {
  console.log('CRITICAL DEFECTS:');
  findings.critical.forEach(f => console.log(`  [CRITICAL] ${f.file} - ${f.issue}`));
}

if (findings.high.length > 0) {
  console.log('HIGH SEVERITY DEFECTS:');
  findings.high.forEach(f => console.log(`  [HIGH] ${f.file} - ${f.issue}`));
}

if (findings.medium.length > 0) {
  console.log('MEDIUM DEFECTS:');
  findings.medium.forEach(f => console.log(`  [MEDIUM] ${f.file} - ${f.issue}`));
}

if (findings.low.length > 0) {
  console.log('LOW DEFECTS:');
  findings.low.forEach(f => console.log(`  [LOW] ${f.file} - ${f.issue}`));
}

console.log('\nPASSED CHECKS:');
findings.passed.forEach(p => console.log(`  [PASS] ${p}`));

console.log('\nAudit complete.');
