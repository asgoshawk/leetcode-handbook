var missingNumber = function (nums) {
  const n = nums.length;
  let expected = n * (n + 1) / 2;
  for (const num of nums) expected -= num;
  return expected;
};
