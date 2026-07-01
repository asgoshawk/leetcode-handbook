var moveZeroes = function (nums) {
  let write = 0;
  for (const num of nums) if (num !== 0) nums[write++] = num;
  while (write < nums.length) nums[write++] = 0;
  return nums;
};
