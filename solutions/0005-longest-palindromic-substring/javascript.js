var longestPalindrome = function (s) {
  let bestStart = 0, bestLen = 1;
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) { left--; right++; }
    const len = right - left - 1;
    if (len > bestLen) { bestLen = len; bestStart = left + 1; }
  };
  for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); }
  return s.slice(bestStart, bestStart + bestLen);
};
