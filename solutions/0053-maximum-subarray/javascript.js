var maxSubArray = function (nums) {
  let ending = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    ending = Math.max(nums[i], ending + nums[i]);
    best = Math.max(best, ending);
  }
  return best;
};
