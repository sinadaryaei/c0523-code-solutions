/* exported sumAll */
function sumAll(numbers) {
  let sumNumb = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumb += numbers[i];
  }
  return sumNumb;
}
