const anArray = [
  {
    isbn: '0000',
    title: 'book1',
    author: 'author1',
  },
  {
    isbn: '0000',
    title: 'book1',
    author: 'author1',
  },
  {
    isbn: '0000',
    title: 'book1',
    author: 'author1',
  },
];

console.log('value of anArray:', anArray);
console.log('typeof anArray:', typeof anArray);

console.log('value of JSON:', JSON.stringify(anArray));
console.log('typeof of JSON:', typeof JSON.stringify(anArray));

const student = '{"numberId": 1234, "stringName":"name"}';

console.log('value of student:', student);
console.log('type of student:', typeof student);

console.log('value of student:', JSON.parse(student));
console.log('type of student:', typeof JSON.parse(student));
