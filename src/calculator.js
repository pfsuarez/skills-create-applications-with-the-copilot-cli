#!/usr/bin/env node

/*
  Calculator CLI

  Supported operations:
  - add (addition)
  - subtract (subtraction)
  - multiply (multiplication)
  - divide (division)

  Usage examples:
    node src/calculator.js add 2 3
    node src/calculator.js subtract 5 1
    node src/calculator.js multiply 4 6
    node src/calculator.js divide 10 2
*/

const [,, op, aStr, bStr] = process.argv;

function printUsage() {
  console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.log('Operations: add, subtract, multiply, divide');
}

function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
}

if (!op || !aStr || !bStr) {
  printUsage();
  process.exit(1);
}

const a = Number(aStr);
const b = Number(bStr);

if (!isNumber(a) || !isNumber(b)) {
  console.error('Error: invalid numeric input.');
  process.exit(1);
}

let result;
switch (op.toLowerCase()) {
  case 'add':
  case '+':
    result = a + b;
    break;
  case 'subtract':
  case '-':
    result = a - b;
    break;
  case 'multiply':
  case '*':
    result = a * b;
    break;
  case 'divide':
  case '/':
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error(`Unknown operation: ${op}`);
    printUsage();
    process.exit(1);
}

// Print result to stdout
console.log(result);
