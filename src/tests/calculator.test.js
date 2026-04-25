const calc = require('../calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.divide(1, 0)).toThrow('division by zero');
  });

  test('invalid numeric input throws', () => {
    expect(() => calc.add('a', 2)).toThrow('invalid numeric input');
  });
});

describe('Extended calculator operations', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('squareRoot: sqrt(16) = 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('squareRoot of negative throws', () => {
    expect(() => calc.squareRoot(-1)).toThrow('square root of negative number');
  });

  test('modulo by zero throws', () => {
    expect(() => calc.modulo(1, 0)).toThrow('division by zero');
  });
});
