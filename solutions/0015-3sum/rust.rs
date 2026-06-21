impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut answer = Vec::new();

        for i in 0..nums.len().saturating_sub(2) {
            if i > 0 && nums[i] == nums[i - 1] { continue; }
            if nums[i] > 0 { break; }

            let (mut left, mut right) = (i + 1, nums.len() - 1);
            while left < right {
                let sum = nums[i] + nums[left] + nums[right];
                if sum < 0 { left += 1; }
                else if sum > 0 { right -= 1; }
                else {
                    answer.push(vec![nums[i], nums[left], nums[right]]);
                    left += 1;
                    right -= 1;
                    while left < right && nums[left] == nums[left - 1] { left += 1; }
                    while left < right && nums[right] == nums[right + 1] { right -= 1; }
                }
            }
        }
        answer
    }
}
