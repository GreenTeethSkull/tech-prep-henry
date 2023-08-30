function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  let splt = time.split(':');
  let hour = Number(splt[0]);
  let min = Number(splt[1]);
  let newmin = (min + minutesToAdd) % 60;
  let addhr = Math.floor((min + minutesToAdd) / 60);
  let newhr = (hour + addhr) % 12;

  if (newmin < 10) {
    newmin = '0' + newmin;
  }

  if (newhr === 0) {
    newhr = 12;
  }

  if (newhr < 10) {
    newhr = '0' + newhr;
  }

  return newhr + ':' + newmin;
}

module.exports = clockMinuteAdder
