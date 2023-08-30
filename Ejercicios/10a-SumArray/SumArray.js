function SumArray (arr, n) {
  // Your code here:
  for (let i=0; i<arr.length-1 ; i++) {
    for (let j=i+1;j<arr.length;j++) {
      let sum = arr[i]+arr[j];
      if (sum===n) {
        return true;
      }
    }
  }

  return false;
}

module.exports = SumArray
