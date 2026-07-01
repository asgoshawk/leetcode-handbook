impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let (mut left, mut sum, mut best) = (0usize, 0, usize::MAX);
        for right in 0..nums.len() {
            sum += nums[right];
            while sum >= target {
                best = best.min(right - left + 1);
                sum -= nums[left]; left += 1;
            }
        }
        if best == usize::MAX { 0 } else { best as i32 }
    }
}
