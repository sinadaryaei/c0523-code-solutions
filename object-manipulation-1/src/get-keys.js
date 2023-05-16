/* exported getKeys */
function getKeys(object) {
  const arrayValue = [];
  for (const property in object) {
    arrayValue.push(property);
  }
  return arrayValue;
}
