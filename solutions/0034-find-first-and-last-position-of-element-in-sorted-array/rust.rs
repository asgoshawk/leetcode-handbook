impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        fn lower(nums: &[i32], x: i32) -> usize {
            let (mut left, mut right) = (0usize, nums.len());
            while left < right {
                let mid = left + (right - left) / 2;
                if nums[mid] < x { left = mid + 1; } else { right = mid; }
            }
            left
        }
        let start = lower(&nums, target);
        if start == nums.len() || nums[start] != target { return vec![-1, -1]; }
        vec![start as i32, lower(&nums, target + 1) as i32 - 1]
    }
}
