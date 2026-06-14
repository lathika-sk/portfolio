import fs from 'fs';

const tail = fs.readFileSync('./routes-data-tail.js', 'utf-8');

// Searching for the text near the "3rd-year B.Tech AI & Data Science student" to find the main heading(s) of the Hero section.
const idx = tail.indexOf('3rd-year B.Tech AI & Data Science student');
if (idx !== -1) {
  console.log('--- HERO RENDERING DETAILS ---');
  console.log(tail.slice(idx - 1000, idx + 1000));
} else {
  console.log('Hero text subset not found.');
}
