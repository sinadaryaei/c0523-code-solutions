/* exported getValues */
function getValues(object) {
  const arrayValue = [];
  for (const property in object) {
    arrayValue.push(object[property]);
  }
  return arrayValue;
}
