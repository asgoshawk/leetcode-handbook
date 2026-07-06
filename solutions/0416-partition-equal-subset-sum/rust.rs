impl Solution {
    pub fn can_partition(nums: Vec<i32>) -> bool {
        let sum: i32 = nums.iter().sum();
        if sum % 2 == 1 { return false; }
        let target = (sum / 2) as usize;
        let mut dp = vec![false; target + 1];
        dp[0] = true;
        for num in nums { for s in (num as usize..=target).rev() { dp[s] = dp[s] || dp[s - num as usize]; } }
        dp[target]
    }
}
