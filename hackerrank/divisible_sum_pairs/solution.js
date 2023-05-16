const divisibleSumPairs = (n, k, ar) => {
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        pairs += 1;
      }
    }
  }

  return pairs;
}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))
// 5

console.log(divisibleSumPairs(6, 5, [1,2,3,4,5,6]))
// 3
