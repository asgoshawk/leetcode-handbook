from collections import Counter


class Solution:
    def topKFrequent(self, nums, k):
        buckets = [[] for _ in range(len(nums) + 1)]
        for number, count in Counter(nums).items():
            buckets[count].append(number)
        result = []
        for bucket in reversed(buckets):
            result.extend(bucket)
            if len(result) >= k:
                return result[:k]
