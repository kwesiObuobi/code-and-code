const birthday = (s, d, m) => {
  let answer = 0;
  
  if (m === 1 && s.length === 1) {
    if (s[0] === d) {
      return answer + 1;
    }
    return;
  }
  
  let i = 0;
  while (i + m - 1 < s.length) {
    let tempD = 0;
    for (let j = i; j <= i + m -1; j++) {
      tempD += s[j];
    }
    if (tempD === d) {
      answer += 1;
    }
    i++;
  }
  
  return answer;
}

console.log(birthday([2,2,1,3,2], 4, 2))
// 2

console.log(birthday([1,2,1,3,2], 3, 2))
// 2

console.log(birthday([4], 4, 1))
// 1

console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7))
// 3