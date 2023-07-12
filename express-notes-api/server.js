import express from 'express';
import fs from 'fs/promises';

const app = express();
app.use(express.json());

const DATA_FILE = 'data.json';

class DataHandler {
  static async read() {
    const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
    return data;
  }

  static async write(data) {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  }
}

const ERRORS = {
  ID: 'id must be a positive integer',
  CONTENT_REQUIRED: 'content is a required field',
  NOT_FOUND: (id) => `cannot find note with id ${id}`,
  UNEXPECTED: 'An unexpected error occurred.',
};

function validateId(req, res, next) {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: ERRORS.ID });
    return;
  }
  req.id = id;
  next();
}

function validateContent(req, res, next) {
  const { content } = req.body;
  if (!content) {
    res.status(400).json({ error: ERRORS.CONTENT_REQUIRED });
    return;
  }
  req.content = content;
  next();
}

async function findNote(req, res, next) {
  try {
    const data = await DataHandler.read();
    const note = data.notes?.[req.id];
    if (note) {
      req.note = note;
      req.data = data;
      next();
    } else {
      res.status(404).json({ error: ERRORS.NOT_FOUND(req.id) });
    }
  } catch (err) {
    next(err);
  }
}

app.get('/api/notes', async (req, res, next) => {
  try {
    const data = await DataHandler.read();
    const notes = Object.values(data.notes);
    res.json(notes);
  } catch (err) {
    next(err);
  }
});

app.get('/api/notes/:id', validateId, findNote, (req, res) => {
  res.json(req.note);
});

app.post('/api/notes', validateContent, async (req, res, next) => {
  try {
    const data = await DataHandler.read();
    const newId = data.nextId++;
    const newNote = { id: newId, content: req.content };
    data.notes[newId] = newNote;
    await DataHandler.write(data);
    res.status(201).json(newNote);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/notes/:id', validateId, findNote, async (req, res, next) => {
  try {
    delete req.data.notes[req.id];
    await DataHandler.write(req.data);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

app.put(
  '/api/notes/:id',
  validateId,
  findNote,
  validateContent,
  async (req, res, next) => {
    try {
      req.note.content = req.content;
      await DataHandler.write(req.data);
      res.json(req.note);
    } catch (err) {
      next(err);
    }
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: ERRORS.UNEXPECTED });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
