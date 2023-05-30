const sockMerchant = (n, arr) => {
  let pair = 0;
  let hashArr = {};

  for (let i = 0; i < n; i++) {
    if (hashArr[arr[i]]) {
      hashArr[arr[i]] = hashArr[arr[i]] + 1;
      if (hashArr[arr[i]] % 2 === 0) {
        pair++;
      }
    } else {
      hashArr[arr[i]] = 1;
    }
  }
  return pair;
}
