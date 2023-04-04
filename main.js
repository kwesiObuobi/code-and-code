const stringLength = (string) => {
  if (string.length > 1 && string.length <= 10) {
    return string.length;
  }
  return 'invalid input';
}

const reverseStriing = (string) => {
  return string.toLowerCase().split('').reverse().join('');
}

module.exports = {stringLength, reverseStriing}