var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;
  while (left < right) {
    best = Math.max(best, Math.min(height[left], height[right]) * (right - left));
    if (height[left] <= height[right]) left += 1;
    else right -= 1;
  }
  return best;
};
