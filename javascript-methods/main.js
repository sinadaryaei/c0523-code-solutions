const number1 = 1;
const number2 = 2;
const number3 = 3;

const maximumValue = Math.max(number1, number2, number3);

console.log('value of maximumValue:', maximumValue);

const heroes = ['hero1', 'hero2', 'hero3', 'hero4'];

console.log('value of heroes:', heroes);

let randomNumber = Math.random();

console.log('value of randomNumber * heroes.length:', randomNumber);

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of randomHero', randomHero);
