import { writeFile } from 'fs/promises';

async function writeNote() {
  const note = process.argv[2] + '\n';
  try {
    await writeFile('note.txt', note);
    console.log('Note written to note.txt');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

writeNote();
