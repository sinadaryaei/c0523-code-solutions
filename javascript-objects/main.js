const student = {
  firstName: 'firstName',
  lastName: 'lastName',
  age: 100,
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;

console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'student';

console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

const vehicle = {
  make: 'acura',
  model: 'nsx',
  year: 1994,
};

vehicle['color'] = 'black';

console.log('value of vehicle["color"]:', vehicle['color']);

vehicle['isConvertible'] = false;

console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

const pet = {
  name: 'dog',
  type: 'animal',
};

delete pet.name;

delete pet.type;

console.log('value of pet:', pet);
