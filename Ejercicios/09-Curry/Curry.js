function curry (fn) {
  // Your code here:
  const args_len = fn.length;
  const fun_arguments = [];

  const curring = (...args) => {
    fun_arguments.push(...args);

    if (fun_arguments.length === args_len) {
      return fn(...fun_arguments);
    } else {
      return curring;
    }
  }

  return curring;
}

module.exports = curry
