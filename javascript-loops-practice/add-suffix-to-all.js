/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const wordSuffix = words[i] + suffix;
    newArray.push(wordSuffix);
  }
  return newArray;
}
