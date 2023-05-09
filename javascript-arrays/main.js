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
