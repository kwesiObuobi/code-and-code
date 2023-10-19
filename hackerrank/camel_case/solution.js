function camelcase(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      count++;
    }
  }
  return ++count;
}
  
console.log(camelcase('oneTwoThree'))
// 3

console.log(camelcase('saveChangesInTheEditor'))
// 5
  