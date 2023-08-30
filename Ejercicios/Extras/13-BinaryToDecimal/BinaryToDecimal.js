function BinaryToDecimal(binary) {
  // Your code here:
  let arr = binary.split("");

  let numarr = arr.map((elm) => Number(elm));

  numarr.reverse();

  let suma = 0;

  for (let i=0;i<numarr.length;i++) {
    suma = suma + (numarr[i]*Math.pow(2,i));
  }

  return suma;
}

module.exports = BinaryToDecimal;
