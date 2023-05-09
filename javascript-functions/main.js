function convertMinutesToSeconds(minutes) {
  const numberOfMinutes = 60 * minutes;
  return numberOfMinutes;
}
console.log('value of numberOfMinutes:', convertMinutesToSeconds(5));

function greet(name) {
  const personName = 'Hey, ' + name;
  return personName;
}
console.log('value of personName:', greet('Beavis'));

function getArea(width, height) {
  const areaOfRectangle = width * height;
  return areaOfRectangle;
}
console.log('value of areaOfRectangle:', getArea(17, 42));
