var maxProduct = function (nums) {
  let maxHere = nums[0], minHere = nums[0], best = nums[0];
  for (const x of nums.slice(1)) {
    if (x < 0) [maxHere, minHere] = [minHere, maxHere];
    maxHere = Math.max(x, maxHere * x);
    minHere = Math.min(x, minHere * x);
    best = Math.max(best, maxHere);
  }
  return best;
};
