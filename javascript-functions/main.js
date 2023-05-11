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
  const firstName = person.firstName;
  return firstName;
}

const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});

console.log('value of getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}

const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);

console.log('value of getLastElementResult:', getLastElementResult);
