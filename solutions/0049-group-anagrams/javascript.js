function groupAnagrams(strs) {
  const groups = new Map();
  for (const word of strs) {
    const signature = [...word].sort().join('');
    if (!groups.has(signature)) groups.set(signature, []);
    groups.get(signature).push(word);
  }
  return [...groups.values()];
}
