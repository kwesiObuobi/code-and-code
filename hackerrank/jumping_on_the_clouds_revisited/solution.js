const jumpClouds = (c, k) => {
  let energy = 100;
  let i = 0;
  while(true) {
    let index = (i + k) % c.length;
    i = index;
    energy -= 1;
    if (c[index] === 1) {
      energy -= 2;
    }
    
    if (index === 0) {
      break;
    }
  }
  
  return energy;
  
}

console.log(jumpClouds([0,0,1,0,0,1,1,0], 2));
console.log(jumpClouds([0,0,1,0], 2));