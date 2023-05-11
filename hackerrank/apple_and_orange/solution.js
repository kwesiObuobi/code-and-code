function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesInRange = 0;
  let orangesInRange = 0;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      applesInRange += 1;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangesInRange += 1;
    }
  }

  console.log(applesInRange);
  console.log(orangesInRange);

}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4]);
// 1
// 2