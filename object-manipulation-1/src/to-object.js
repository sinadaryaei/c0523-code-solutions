/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  const firstIndex = keyValuePair[0];
  const secondIndex = keyValuePair[1];
  obj[firstIndex] = secondIndex;
  return obj;
}
