import Add from './add';
import Subtract from './subtract';
import Multiply from './multiply';
import Divide from './divide';

const [, , num1, operation, num2] = process.argv;

const a = Number(num1);
const b = Number(num2);

let result;

switch (operation) {
  case 'plus':
    result = Add(a, b);
    break;
  case 'minus':
    result = Subtract(a, b);
    break;
  case 'times':
    result = Multiply(a, b);
    break;
  case 'over':
    result = Divide(a, b);
    break;
  default:
    console.log('Invalid operation');
}

console.log('result:', result);
