impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let (mut ending, mut best) = (nums[0], nums[0]);
        for &number in &nums[1..] {
            ending = number.max(ending + number);
            best = best.max(ending);
        }
        best
    }
}
