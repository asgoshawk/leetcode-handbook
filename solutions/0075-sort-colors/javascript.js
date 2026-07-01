var sortColors = function (nums) {
  let low = 0, i = 0, high = nums.length - 1;
  while (i <= high) {
    if (nums[i] === 0) [nums[low++], nums[i++]] = [nums[i], nums[low]];
    else if (nums[i] === 2) [nums[i], nums[high--]] = [nums[high], nums[i]];
    else i++;
  }
  return nums;
};
