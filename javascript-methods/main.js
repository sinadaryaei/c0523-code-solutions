const number1 = 1;
const number2 = 2;
const number3 = 3;

const maximumValue = Math.max(number1, number2, number3);

console.log('value of maximumValue:', maximumValue);

const heroes = ['hero1', 'hero2', 'hero3', 'hero4'];

let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of randomHero', randomHero);

const library = [
  { title: 'title1', author: 'author1' },
  { title: 'title2', author: 'author2' },
  { title: 'title3', author: 'author3' },
];

const lastBook = library.pop();

console.log('value of lastBook:', lastBook);

const firstBook = library.shift();

console.log('value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('value of the library array:', library);

const fullName = 'firstName lastName';

console.log('value of fullName:', fullName);

const firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
