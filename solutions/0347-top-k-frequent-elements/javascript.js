var topKFrequent = function (nums, k) {
  const counts = new Map();
  for (const number of nums) counts.set(number, (counts.get(number) ?? 0) + 1);
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [number, count] of counts) buckets[count].push(number);
  const result = [];
  for (let count = buckets.length - 1; count > 0 && result.length < k; count -= 1) result.push(...buckets[count]);
  return result.slice(0, k);
};
