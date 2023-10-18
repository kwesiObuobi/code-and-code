function getTotalX(a, b) {
a = a.sort((a, b) => a - b)
b = b.sort((a, b) => a - b)
let count = 0;

// loop from max(a) to min(b)

for (let i = a[a.length - 1]; i <= b[0]; i++) {
  // scanning array a
  let endOfA = true;
  for (let j = 0; j < a.length; j++){
    if (i % a[j] !== 0) {
      endOfA = false;
      break;
    }
  }
  
  // scanning array b
  let endOfB = false;
  if (endOfA) {
    endOfB = true
    for (let k = 0; k < b.length; k++) {
      if (b[k] % i !== 0) {
        endOfB = false;
        break;
      }
    }
  }
  
  if (endOfB) count++;
}

return count;
}

console.log(getTotalX([2, 6], [24, 36]))
// 2
// i.e. 6 and 12

console.log(getTotalX([2, 4], [16, 32, 96]))
// 3
// i.e. 4, 8, and 16