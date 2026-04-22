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

function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
}

function toNumber(n) {
  const num = Number(n);
  if (!isNumber(num)) throw new Error('invalid numeric input');
  return num;
}

function add(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b);
}

function divide(a, b) {
  const nb = toNumber(b);
  if (nb === 0) throw new Error('division by zero');
  return toNumber(a) / nb;
}

module.exports = { add, subtract, multiply, divide };

// CLI entrypoint
if (require.main === module) {
  const [,, op, aStr, bStr] = process.argv;

  function printUsage() {
    console.log('Usage: node src/calculator.js <operation> <num1> <num2>');
    console.log('Operations: add, subtract, multiply, divide');
  }

  if (!op || !aStr || !bStr) {
    printUsage();
    process.exit(1);
  }

  try {
    let result;
    switch (op.toLowerCase()) {
      case 'add':
      case '+':
        result = add(aStr, bStr);
        break;
      case 'subtract':
      case '-':
        result = subtract(aStr, bStr);
        break;
      case 'multiply':
      case '*':
        result = multiply(aStr, bStr);
        break;
      case 'divide':
      case '/':
        result = divide(aStr, bStr);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        printUsage();
        process.exit(1);
    }

    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}
