var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let best = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let cur = num, len = 1;
      while (set.has(cur + 1)) { cur++; len++; }
      best = Math.max(best, len);
    }
  }
  return best;
};
