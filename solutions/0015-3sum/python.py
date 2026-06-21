class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        answer = []

        for index, value in enumerate(nums[:-2]):
            if index > 0 and value == nums[index - 1]:
                continue
            if value > 0:
                break

            left, right = index + 1, len(nums) - 1
            while left < right:
                total = value + nums[left] + nums[right]
                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    answer.append([value, nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

        return answer
