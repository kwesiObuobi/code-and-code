const workbook = (n, k, arr) => {
  let specials = 0;
  let page = 1;
  
  for (let i = 0; i < n; i++) {
    
    for (let j = 0; j < arr[i]; j++) {
      if (j + 1 === page) {
        specials += 1;
      }
      
      if ((j + 1) % k === 0) {
        page += 1;
      }
    }
    
    if (arr[i] % k === 0) {
      continue;
    }
    
    page += 1;
  }
  
  return specials;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]))
// 4

console.log(workbook(10, 5, [3 ,8 ,15, 11, 14, 1, 9, 2, 24, 31]))
// 8

