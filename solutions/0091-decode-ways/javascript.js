function numDecodings(s) {
  let prev2 = 1, prev1 = s[0] === '0' ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    let current = s[i] === '0' ? 0 : prev1;
    const two = Number(s.slice(i - 1, i + 1));
    if (two >= 10 && two <= 26) current += prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
