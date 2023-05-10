function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log(
  'value of convertMinutesToSecondsResult:',
  convertMinutesToSecondsResult
);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}

const greetResult = greet('Beavis');

console.log('value of greetResult:', greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}

const getAreaResult = getArea(17, 42);

console.log('value of getAreaResult:', getAreaResult);

function getFirstName(person) {
  return getFirstNameResult;
}

const names = { firstName: 'Lelouche', lastName: 'Lamperouge' };

const getFirstNameResult = names.firstName;

console.log('value of getFirstNameResult:', getFirstName(names));

function getLastElement(array) {
  return getLastElementResult;
}

const myArray = ['propane', 'and', 'propane', 'accessories'];

const getLastElementResult = myArray[myArray.length - 1];

console.log('value of getLastElementResult:', getLastElement(myArray));
