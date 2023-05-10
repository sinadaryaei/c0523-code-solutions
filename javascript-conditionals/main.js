/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('value of isUnderFive:', isUnderFive(4));
console.log('value of isUnderFive:', isUnderFive(10));
console.log('value of isUnderFive:', isUnderFive(5));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('value of isEven:', isEven(4));
console.log('value of isEven:', isEven(10));
console.log('value of isEven:', isEven(5));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('value of startsWithJ:', startsWithJ('JavaScript'));
console.log('value of startsWithJ:', startsWithJ('PHP'));
console.log('value of startsWithJ:', startsWithJ('HTML'));
console.log('value of startsWithJ:', startsWithJ('Kotlin'));
console.log('value of startsWithJ:', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  if (person.age === 21) {
    return true;
  } else {
    return false;
  }
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log('value of isOldEnoughToDrink:', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log('value of isOldEnoughToDrive:', isOldEnoughToDrink(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}
console.log(
  'value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDrive(homer, bart)
);

function categorizeAcidity(pH) {}
