function kangaroo(x1, v1, x2, v2) {
  // if they have the same jump rate
  if (v1 === v2) {
    // if they are at the same position
    return x1 === x2 ? 'YES' : 'NO';
  }

  // number of jumps required for them to meet
  const jumps = (x2 - x1) / (v1 - v2);

  return jumps >= 0 && Number.isInteger(jumps) ? 'YES' : 'NO';
}

console.log(kangaroo(0, 3, 4, 2))
// YES

console.log(kangaroo(0, 2, 5, 3))
// NO