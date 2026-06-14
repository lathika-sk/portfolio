import fs from 'fs';

const indexContent = fs.readFileSync('./index-source.js', 'utf-8');
const routesContent = fs.readFileSync('./routes-source.js', 'utf-8');

console.log('INDEX FILE LENGTH:', indexContent.length);
console.log('ROUTES FILE LENGTH:', routesContent.length);

// Let's check some regex strings or print chunks of files around interest terms.
function findTerms(content: string, term: string, count = 200) {
  let idx = 0;
  const results: string[] = [];
  while (true) {
    idx = content.indexOf(term, idx);
    if (idx === -1) break;
    results.push(`--- MATCH FOR "${term}" at index ${idx} ---`);
    results.push(content.slice(Math.max(0, idx - count), Math.min(content.length, idx + term.length + count)));
    idx += term.length;
    if (results.length > 20) break; // limit
  }
  return results.join('\n\n');
}

console.log('Searching for main references in routes-source.js...');
const keys = ['B.Tech', 'student', 'certifications', 'projects', 'og:description', 'developer', 'Index', 'Home', 'About', 'Contact', 'Portfolio'];
for (const key of keys) {
  const matches = findTerms(routesContent, key, 100);
  if (matches) {
    console.log(matches.slice(0, 1000));
  }
}

console.log('\nSearching in index-source.js...');
for (const key of ['B.Tech', 'developer', 'certifications', 'Portfolio']) {
  const matches = findTerms(indexContent, key, 100);
  if (matches) {
    console.log(matches.slice(0, 500));
  }
}
