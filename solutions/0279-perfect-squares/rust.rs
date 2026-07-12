impl Solution {
    pub fn num_squares(n: i32) -> i32 {
        let n = n as usize;
        let mut dp = vec![i32::MAX / 2; n + 1];
        dp[0] = 0;
        for x in 1..=n {
            let mut s = 1;
            while s * s <= x {
                dp[x] = dp[x].min(dp[x - s * s] + 1);
                s += 1;
            }
        }
        dp[n]
    }
}
