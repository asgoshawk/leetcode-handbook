var maxSlidingWindow = function (nums, k) {
  const result = [];
  const deque = [];
  let head = 0;
  for (let i = 0; i < nums.length; i += 1) {
    while (head < deque.length && deque[head] <= i - k) head += 1;
    while (head < deque.length && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[head]]);
  }
  return result;
};
