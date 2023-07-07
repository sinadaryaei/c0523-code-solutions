import { readFile } from 'node:fs/promises';

async function printFileContents() {
  if (!process.argv[2]) {
    console.log('Please provide a file name as a command line argument.');
    return;
  }

  const fileName = process.argv[2];

  try {
    const data = await readFile(fileName, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`Error reading file ${fileName} from disk: ${err}`);
  }
}

printFileContents();
