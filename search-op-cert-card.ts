import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Searching for the definition of Op which renders a certificate card.
// We know it starts with `function Op({c:` or similar
const idx = tail.indexOf('function Op(');
const idx2 = tail.indexOf('Op=');
const finalIdx = idx !== -1 ? idx : idx2;

if (finalIdx !== -1) {
  console.log('--- CERTIFICATE CARD COMPONENT Op ---');
  console.log(tail.slice(finalIdx - 100, finalIdx + 1500));
} else {
  console.log('Op component definition not found directly.');
}
