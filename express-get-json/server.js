import express from 'express';

const app = express();

app.set('json spaces', 2);

const grade = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grade) {
    gradesArray.push(grade[key]);
  }
  res.json(gradesArray);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
