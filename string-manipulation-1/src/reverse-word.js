/* exported reverseWord */
function reverseWord(word) {
  let emptyString = '';
  let i = word.length - 1;
  while (i >= 0) {
    emptyString += word[i];
    i--;
  }
  return emptyString;
}
