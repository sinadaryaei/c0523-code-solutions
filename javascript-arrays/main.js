const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

const stringAmerica = 'America is';

console.log(
  stringAmerica +
    ' ' +
    colors[0] +
    ',' +
    ' ' +
    colors[1] +
    ',' +
    ' ' +
    'and' +
    ' ' +
    colors[2] +
    '.'
);

colors[2] = 'green';

console.log('value of colors[2]:', colors[2]);

const stringMexico = 'Mexico is';

console.log(
  stringMexico +
    ' ' +
    colors[0] +
    ',' +
    ' ' +
    colors[1] +
    ',' +
    ' ' +
    'and' +
    ' ' +
    colors[2] +
    '.'
);
console.log('value of colors:', colors);

const students = ['John', 'Mark', 'Bob', 'Ray'];
const numberOfStudents = students.length;

console.log(
  'There are' + ' ' + numberOfStudents + ' ' + 'students in the class.'
);

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];

console.log('The last student in the array is' + ' ' + lastStudent);
console.log(students);
