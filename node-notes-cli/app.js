import { promises as fs } from 'fs';

let data;
try {
  const rawData = await fs.readFile('./data.json');
  data = JSON.parse(rawData);
} catch (error) {
  data = {
    nextId: 1,
    notes: {},
  };
}

async function saveNotes() {
  await fs.writeFile('data.json', JSON.stringify(data, null, 2));
}

async function addNote(id, content) {
  if (!content) {
    content = id;
    id = data.nextId++;
  }
  if (data.notes[id]) {
    throw new Error(`Note with ID ${id} already exists.`);
  }
  data.notes[id] = content;
  await saveNotes();
}

function listNotes() {
  if (Object.keys(data.notes).length === 0) {
    throw new Error('No notes found.');
  }
  return data.notes;
}

function readNote(id) {
  if (!id) {
    return listNotes();
  }
  if (!data.notes[id]) {
    throw new Error('Note ID does not exist.');
  }
  return data.notes[id];
}

async function deleteNote(id) {
  if (!data.notes[id]) {
    throw new Error('Note ID does not exist.');
  }
  delete data.notes[id];
  await saveNotes();
}

async function updateNote(id, content) {
  if (!content) {
    throw new Error('Content is required to update a note.');
  }
  if (!data.notes[id]) {
    throw new Error(`Note with ID ${id} does not exist.`);
  }
  data.notes[id] = content;
  await saveNotes();
}

const [, , command, arg1, arg2] = process.argv;

(async () => {
  try {
    switch (command) {
      case 'add':
      case 'create':
        await addNote(arg1, arg2);
        console.log('Note added.');
        break;
      case 'list':
        console.log(listNotes());
        break;
      case 'read': {
        const note = readNote(arg1);
        if (typeof note === 'string') {
          console.log(note);
        } else {
          for (const [id, content] of Object.entries(note)) {
            console.log(`${id}. '${content}'`);
          }
        }
        break;
      }
      case 'delete':
        try {
          await deleteNote(arg1);
          console.log('Note deleted.');
        } catch (error) {
          console.log('Failed to delete note:', error.message);
        }
        break;
      case 'update':
        try {
          await updateNote(Number(arg1), arg2);
          console.log('Note updated.');
        } catch (error) {
          console.log('Failed to update note:', error.message);
        }
        break;
      default:
        throw new Error('Invalid command.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
