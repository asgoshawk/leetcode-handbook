function minWindow(s, t) {
  const need = new Map();
  for (const character of t) need.set(character, (need.get(character) ?? 0) + 1);

  let missing = t.length;
  let left = 0;
  let bestStart = 0;
  let bestLength = Infinity;

  for (let right = 0; right < s.length; right += 1) {
    const character = s[right];
    if ((need.get(character) ?? 0) > 0) missing -= 1;
    need.set(character, (need.get(character) ?? 0) - 1);

    while (missing === 0) {
      if (right - left + 1 < bestLength) {
        bestStart = left;
        bestLength = right - left + 1;
      }
      const removed = s[left];
      need.set(removed, (need.get(removed) ?? 0) + 1);
      if (need.get(removed) > 0) missing += 1;
      left += 1;
    }
  }
  return bestLength === Infinity ? '' : s.slice(bestStart, bestStart + bestLength);
}
