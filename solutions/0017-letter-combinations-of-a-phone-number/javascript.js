var letterCombinations = function (digits) {
  if (!digits) return [];
  const map = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const result = [];
  const dfs = (i, path) => {
    if (i === digits.length) { result.push(path); return; }
    for (const ch of map[digits[i]]) dfs(i + 1, path + ch);
  };
  dfs(0, '');
  return result;
};
