import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Let's print arrays or objects containing skill definitions
// Common skills words: "React", "Python", "TypeScript", "TensorFlow", "scikit", "FastAPI"
const skillKeywords = ['Python', 'React', 'HTML5', 'SQL', 'Git', 'Data Science'];

console.log('--- SCANNING FOR SKILLS LOGIC ---');
for (const kw of skillKeywords) {
  const index = tail.indexOf(kw);
  if (index !== -1) {
    console.log(`\nMatch for "${kw}" at offset ${index}:`);
    console.log(tail.slice(Math.max(0, index - 200), Math.min(tail.length, index + 400)));
  }
}

// Let's print out all capital letter array assignments (like Jd=, Td=, ed=) in the last part of routes file.
// Let's write a pattern scan for something like `XX=[{` where XX is any two-letter word.
console.log('\n--- SCANNING FOR ALL TWO-CHAR ARRAYS (e.g. ad=[ ) ---');
const regex = /\b([a-zA-Z][a-zA-Z])=\s*\[/g;
let match;
while ((match = regex.exec(tail)) !== null) {
  console.log(`Found pattern: ${match[1]}= [ at index ${match.index} in tail`);
  console.log(tail.slice(match.index, match.index + 200));
  console.log('---');
}
