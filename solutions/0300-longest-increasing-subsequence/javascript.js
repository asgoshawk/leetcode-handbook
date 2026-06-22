var lengthOfLIS = function (nums) {
  const tails = [];
  for (const number of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const middle = left + Math.floor((right - left) / 2);
      if (tails[middle] < number) left = middle + 1;
      else right = middle;
    }
    tails[left] = number;
  }
  return tails.length;
};
