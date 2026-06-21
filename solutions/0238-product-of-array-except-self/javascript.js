function productExceptSelf(nums) {
  const answer = new Array(nums.length).fill(1);
  let prefix = 1;
  for (let index = 0; index < nums.length; index += 1) {
    answer[index] = prefix;
    prefix *= nums[index];
  }
  let suffix = 1;
  for (let index = nums.length - 1; index >= 0; index -= 1) {
    answer[index] *= suffix;
    suffix *= nums[index];
  }
  return answer;
}
