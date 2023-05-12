/* exported countdown */

// Review countdown
function countdown(number) {
  const numbers = [];
  let numbCount = number;
  while (numbCount >= 0) {
    numbers.push(numbCount);
    numbCount--;
  }
  return numbers;
}
