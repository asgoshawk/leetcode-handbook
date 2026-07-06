var isHappy = function (n) {
  const seen = new Set();
  const next = (x) => String(x).split('').reduce((sum, ch) => sum + Number(ch) ** 2, 0);
  while (n !== 1 && !seen.has(n)) { seen.add(n); n = next(n); }
  return n === 1;
};
