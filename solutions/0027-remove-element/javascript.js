var removeElement = function (nums, val) {
  let write = 0;
  for (const num of nums) if (num !== val) nums[write++] = num;
  return write;
};
