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
  if (person.age >= 21) {
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
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
console.log(
  'value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDrive(homer, bart)
);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}
console.log('value of categorizeAcidity:', categorizeAcidity(1));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cut~";
    case 'cody':
      return 'Goodnight everybody!';
    case 'minerva':
      return 'Goodnight everybody!';
    default:
      return 'Goodnight everybody!';
  }
}
console.log('value of introduceWarnerBro:', introduceWarnerBro());

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'action movie';
    case 'comedy':
      return 'comedy movie';
    case 'horro':
      return 'horro movie';
    case 'drama':
      return 'drama movie';
    case 'musical':
      return 'musical movie';
    case 'sci-fi':
      return 'sci-fi movie';
    default:
      return 'Pick a movie!';
  }
}
console.log('value of recommendMovie:', recommendMovie());
