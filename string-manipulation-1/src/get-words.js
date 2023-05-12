/* exported getWords */
function getWords(string) {
  const anArray = [];
  if (string.length === 0) {
    return anArray;
  } else {
    return string.split(' ');
  }
}
