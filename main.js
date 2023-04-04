const stringLength = (string) => {
  if (string.length > 1 && string.length <= 10) {
    return string.length;
  }
  return 'invalid input';
}

const reverseString = (string) => {
  return string.toLowerCase().split('').reverse().join('');
}

class Calculator {
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  divide = (a, b) => a / b;
  multiply = (a, b) => a * b;
}

module.exports = {stringLength, reverseString, Calculator}