impl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        let (mut low, mut i, mut high) = (0usize, 0usize, nums.len() - 1);
        while i <= high {
            match nums[i] {
                0 => { nums.swap(low, i); low += 1; i += 1; }
                2 => { nums.swap(i, high); if high == 0 { break; } high -= 1; }
                _ => i += 1,
            }
        }
    }
}
