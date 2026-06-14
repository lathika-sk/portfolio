import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Let's search for "Logo" or header elements like "Home", "About", "Projects", "Certificates", "Achievements", "Contact" in navigation bar
const navTerms = ['About', 'Projects', 'Academic', 'Skills', 'Certificates', 'Achievements', 'Contact'];

console.log('--- NAV BAR SEARCH ---');
// Let's search for her navbar list items map
const idx = tail.indexOf('nav');
if (idx !== -1) {
  console.log('Found "nav" at offset:', idx);
  console.log(tail.slice(idx - 300, idx + 800));
} else {
  console.log('"nav" tag not found as literal.');
}

// Let's search for logo or brand name in header area
const sIdx = tail.indexOf('Lathika SK');
if (sIdx !== -1) {
  console.log('\nFound "Lathika SK" brand at offset:', sIdx);
  console.log(tail.slice(sIdx - 300, sIdx + 500));
}
