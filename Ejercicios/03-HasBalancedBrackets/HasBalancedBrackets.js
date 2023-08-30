function HasBalancedBrackets (string) {
  // Your code here:
  const stack = [];
  const bracketMap = {
    '[': ']',
    '(': ')',
    '{': '}'
  };

  for (const char of string) {
    if (bracketMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketMap).includes(char)) {
      if (bracketMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = HasBalancedBrackets
