impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        let (mut two_back, mut one_back) = (0, 0);

        for amount in nums {
            (two_back, one_back) = (one_back, one_back.max(two_back + amount));
        }

        one_back
    }
}
