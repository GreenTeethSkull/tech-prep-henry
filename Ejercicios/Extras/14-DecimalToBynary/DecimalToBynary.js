function DecimalToBynary (num) {
  // Your code here:
  let modules = [];
  let coc = num;

  while(coc>1) {
    modules.push(coc%2);
    coc = Math.floor(coc/2);
  }

  modules.push(coc);
  modules.reverse();

  return modules.join('');
}

module.exports = DecimalToBynary
