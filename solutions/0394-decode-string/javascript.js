var decodeString = function (s) {
  const stack = [];
  let current = '', num = 0;
  for (const ch of s) {
    if (/\d/.test(ch)) num = num * 10 + Number(ch);
    else if (ch === '[') { stack.push([current, num]); current = ''; num = 0; }
    else if (ch === ']') { const [prev, count] = stack.pop(); current = prev + current.repeat(count); }
    else current += ch;
  }
  return current;
};
