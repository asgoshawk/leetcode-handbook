var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (const word of strs.slice(1)) {
    while (!word.startsWith(prefix)) prefix = prefix.slice(0, -1);
    if (prefix === '') break;
  }
  return prefix;
};
