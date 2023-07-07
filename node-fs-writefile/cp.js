import { readFile, writeFile } from 'fs';

const [, , sourceFile, destinationFile] = process.argv;

try {
  const data = await readFile(sourceFile);
  await writeFile(destinationFile, data);
  console.log(`Successfully copied ${sourceFile} to ${destinationFile}`);
} catch (error) {
  console.error(`An error occurred:`, error);
}
