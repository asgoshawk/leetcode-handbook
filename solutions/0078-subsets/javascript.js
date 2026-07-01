var subsets = function (nums) {
  const result = [[]];
  for (const num of nums) {
    const size = result.length;
    for (let i = 0; i < size; i++) result.push([...result[i], num]);
  }
  return result;
};
