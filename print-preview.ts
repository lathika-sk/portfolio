import fs from 'fs';

const files = ['certifications', 'projects', 'education', 'experience', 'achievements'];

for (const name of files) {
  try {
    const raw = fs.readFileSync(`./${name}.json`, 'utf-8');
    // We can evaluate or parse it. Since it's valid JS/JSON-like literal, let's print statistics
    console.log(`\n=== FILE: ${name}.json ===`);
    console.log(`Characters: ${raw.length}`);
    console.log('Beginning of content:');
    console.log(raw.slice(0, 300));
    console.log('...');
    console.log('End of content:');
    console.log(raw.slice(-300));
  } catch (err: any) {
    console.error(`Error reading ${name}.json:`, err.message);
  }
}
