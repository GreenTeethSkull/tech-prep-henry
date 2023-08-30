function MaxValue (shares) {
  // Your code here:
  let max = 0;

  for (let i=0;i<shares.length-1;i++) {
    for (let j=i+1;j<shares.length;j++) {
      let sum = shares[j] - shares[i];
      if(sum>max) {
        max = sum;
      }
    }
  }

  return max;
}

module.exports = MaxValue
