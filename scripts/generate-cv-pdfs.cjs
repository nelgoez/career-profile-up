const path = require('node:path');
const { chromium } = require('playwright');

const CV_DIR = path.resolve(__dirname, '..', '..', '..', 'Career', 'CVs');
const files = [
  'nahuel-gomez-qa-automation.html',
  'nahuel-gomez-full-career.html',
  'nahuel-gomez-non-it.html',
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  for (const file of files) {
    const htmlPath = path.join(CV_DIR, file);
    const pdfPath = htmlPath.replace(/\.html$/, '.pdf');
    const page = await context.newPage();

    console.log(`Converting: ${file} -> ${path.basename(pdfPath)}`);
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle' });

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: { top: '0.2in', bottom: '0.2in', left: '0.2in', right: '0.2in' },
      printBackground: true,
      preferCSSPageSize: false,
    });

    console.log(`  Done: ${path.basename(pdfPath)}`);
    await page.close();
  }

  await browser.close();
  console.log('\nAll PDFs generated successfully.');
})().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
