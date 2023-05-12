/* exported getStudentNames */
function getStudentNames(students) {
  const newArray = [];
  for (let i = 0; i < students.length; i++) {
    const objName = students[i].name;
    newArray.push(objName);
  }
  return newArray;
}
