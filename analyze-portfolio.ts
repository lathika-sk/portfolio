import fs from 'fs';

const ind = fs.readFileSync('./index-source.js', 'utf-8');
const rou = fs.readFileSync('./routes-source.js', 'utf-8');

console.log('--- SCANNING FILES ---');

// Let's write a helper to extract sections or long objects.
// We can find where lists and items are, e.g. ["$","span",...
// Let's search for "certifications", "B.Tech", "award", "Full-stack", "experience", "GitHub", "LinkedIn"

function findContexts(fileContent: string, term: string, count = 300) {
  let idx = 0;
  console.log(`\n=== MATCHES FOR '${term}' ===`);
  while (true) {
    idx = fileContent.indexOf(term, idx);
    if (idx === -1) break;
    const chunk = fileContent.slice(Math.max(0, idx - 100), Math.min(fileContent.length, idx + term.length + count));
    console.log(chunk);
    console.log('----------------------------------------------------');
    idx += term.length;
    if (idx > fileContent.length) break;
  }
}

// Let's search inside the files for names, and print where we find certifications.
// Search "30+" or "cert"
findContexts(rou, 'B.Tech', 400);
findContexts(rou, 'certification', 400);

