var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  for (const interval of intervals) {
    const last = result[result.length - 1];
    if (!last || last[1] < interval[0]) result.push([...interval]);
    else last[1] = Math.max(last[1], interval[1]);
  }
  return result;
};
