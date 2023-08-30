function spyOn (fn) {
  // Your code here:
  let count = 0;
  let call_val = [];
  let returned = [];
  
  const spy = (...args) => {
    count++;
    args.forEach((elm) => {call_val.push(elm)});
    returned.push(fn(...args));
    return fn(...args);
  }

  spy.getCallCount = () => {
    return count;
  }

  spy.wasCalledWith = (val) => {
    return call_val.includes(val);
  }

  spy.returned = (val) => {
    return returned.includes(val);
  }

  return spy;
}

module.exports = spyOn
