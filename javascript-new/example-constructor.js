function ExampleConstructor() {}

console.log('value of prototype', ExampleConstructor.__proto__);
console.log('type of protoype', typeof ExampleConstructor.__proto__);

const exampleCon = new ExampleConstructor();

console.log('value of exampleCon:', exampleCon);

const exInst = exampleCon instanceof ExampleConstructor;

console.log('value of exInst:', exInst);
