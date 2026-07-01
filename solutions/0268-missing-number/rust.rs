impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let n = nums.len() as i32;
        n * (n + 1) / 2 - nums.into_iter().sum::<i32>()
    }
}
