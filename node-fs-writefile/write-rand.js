import { writeFile } from 'fs/promises';

async function writeRandomNumber() {
  const randomNumber = Math.random();
  try {
    await writeFile('random.txt', randomNumber.toString() + '\n', 'utf-8');
    console.log('Random number written to random.txt');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

writeRandomNumber();
