function canConstruct(ransomNote, magazine) {
  const counts = new Map();
  for (const ch of magazine) counts.set(ch, (counts.get(ch) ?? 0) + 1);
  for (const ch of ransomNote) {
    const left = counts.get(ch) ?? 0;
    if (left === 0) return false;
    counts.set(ch, left - 1);
  }
  return true;
}
