impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        let (mut jumps, mut end, mut far) = (0, 0usize, 0usize);
        for i in 0..nums.len().saturating_sub(1) {
            far = far.max(i + nums[i] as usize);
            if i == end {
                jumps += 1;
                end = far;
            }
        }
        jumps
    }
}
