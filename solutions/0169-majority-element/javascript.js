var majorityElement = function (nums) {
  let candidate;
  let count = 0;
  for (const number of nums) {
    if (count === 0) candidate = number;
    count += number === candidate ? 1 : -1;
  }
  return candidate;
};
