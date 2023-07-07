import { readFile } from 'node:fs/promises';

async function printFileContents() {
  try {
    const data = await readFile('dijkstra.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
  }
}

printFileContents();
