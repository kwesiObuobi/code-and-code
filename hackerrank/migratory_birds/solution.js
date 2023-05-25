function migratoryBirds(arr) {
  let arrDict = {};
  let maxValues = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arrDict[arr[i]]) {
      arrDict[arr[i]] = arrDict[arr[i]] + 1;
    } else {
      arrDict[arr[i]] = 1
    }
    
    if (arrDict[arr[i]] === max) {
      maxValues.push(arr[i]);
    }
    
    if (arrDict[arr[i]] > max) {
      maxValues = [];
      maxValues.push(arr[i]);
      max = arrDict[arr[i]];
    }
  }
  
  return Math.min(...maxValues);
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))
// 3

console.log(migratoryBirds([1,4,4,4,5,3]))
// 4
