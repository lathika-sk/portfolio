import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Searching for strings that look like description text, contact text, social links, email, etc.
// Common keys: "linkedin", "github", "phone", "email", "@gmail"

const keywords = ['linkedin.com', 'github.com', 'lathikask', 'gmail', 'Sasurie', 'Tiruppur'];
console.log('--- SCANNING FOR PROFILE LINKS AND TEXT ---');
keywords.forEach(kw => {
  let idx = 0;
  while ((idx = tail.indexOf(kw, idx)) !== -1) {
    console.log(`\nMatch for "${kw}" at offset ${idx}:`);
    console.log(tail.slice(Math.max(0, idx - 150), Math.min(tail.length, idx + 350)));
    idx += kw.length;
    break; // just show first match
  }
});

// Let's print out all lines of routes-data-tail that contain email patterns
const emailRef = tail.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g);
console.log('\nEmails found:', emailRef);

// Phone number pattern or phone fields search
const phoneRef = tail.indexOf('8637607494');
if (phoneRef !== -1) {
  console.log('\nContact info block around phone:');
  console.log(tail.slice(phoneRef - 100, phoneRef + 300));
}
