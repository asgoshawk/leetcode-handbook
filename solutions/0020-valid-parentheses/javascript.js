var isValid = function (s) {
  const expected = [];
  const pairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);

  for (const character of s) {
    if (pairs.has(character)) {
      expected.push(pairs.get(character));
    } else if (expected.pop() !== character) {
      return false;
    }
  }

  return expected.length === 0;
};
