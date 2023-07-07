import { readFile } from 'node:fs/promises';

const [, , ...args] = process.argv;

if (args.length === 0) {
  console.error('No files were provided.');
  process.exit(1);
}

async function concatenate() {
  const contentPromises = args.map(async (arg) => {
    try {
      return await readFile(arg, 'utf8');
    } catch (error) {
      console.error(`Failed to read file ${arg}: ${error}`);
      process.exit(1);
    }
  });

  try {
    const contents = await Promise.all(contentPromises);
    console.log(contents.join('\n'));
  } catch (error) {
    console.error(`Failed to read one or more files: ${error}`);
  }
}

concatenate();
