function FindWordStartingWith(book, query) {
  // Your code here:
  let indexs = [];
  let splt = book.text.split(" ");
  let index = 0;

  for (let i = 0; i < splt.length; i++) {
    const por = splt[i].slice(0,query.length);
    if (por.toLowerCase() === query.toLowerCase()) {
      indexs.push(index);
    }
    index = index + splt[i].length + 1;
  }

  return indexs;
}

module.exports = FindWordStartingWith;
