var permute = function (nums) {
  const result = [];
  const visit = (first) => {
    if (first === nums.length) result.push([...nums]);
    for (let i = first; i < nums.length; i += 1) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      visit(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  };
  visit(0);
  return result;
};
