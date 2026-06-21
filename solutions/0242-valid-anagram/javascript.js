function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const counts = new Map();
  for (const character of s) counts.set(character, (counts.get(character) ?? 0) + 1);
  for (const character of t) {
    const remaining = counts.get(character) ?? 0;
    if (remaining === 0) return false;
    counts.set(character, remaining - 1);
  }
  return true;
}
