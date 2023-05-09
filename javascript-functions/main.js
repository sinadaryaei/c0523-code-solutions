function convertMinutesToSeconds(minutes) {
  const numberOfMinutes = 60 * minutes;
  return numberOfMinutes;
}
console.log('value of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  const personName = 'Hey, ' + name;
  return personName;
}
console.log('value of greet:', greet('Beavis'));

function getArea(width, height) {
  const areaOfRectangle = width * height;
  return areaOfRectangle;
}
console.log('value of getArea:', getArea(17, 42));

function getFirstName(person) {
  const names = [
    {
      firstName: 'Lelouche',
      lastName: 'Lamperouge',
    },
  ];
  return names[0].firstName;
}
console.log('value of getFirstName:', getFirstName());

function getLastElement(array) {
  const myArray = ['propane', 'and', 'propane', 'accessories'];
  return myArray[myArray.length - 1];
}
console.log('value of getLastElement', getLastElement());
