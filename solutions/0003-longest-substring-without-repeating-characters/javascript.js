function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let best = 0;

  for (const [right, character] of Array.from(s).entries()) {
    left = Math.max(left, lastSeen.get(character) ?? 0);
    best = Math.max(best, right - left + 1);
    lastSeen.set(character, right + 1);
  }

  return best;
}
