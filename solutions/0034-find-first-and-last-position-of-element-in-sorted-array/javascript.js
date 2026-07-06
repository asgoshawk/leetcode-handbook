var searchRange = function (nums, target) {
  const lower = (x) => {
    let left = 0, right = nums.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < x) left = mid + 1; else right = mid;
    }
    return left;
  };
  const start = lower(target);
  if (start === nums.length || nums[start] !== target) return [-1, -1];
  return [start, lower(target + 1) - 1];
};
