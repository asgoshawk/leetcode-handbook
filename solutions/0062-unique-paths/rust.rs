impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
        let mut dp = vec![1; n as usize];
        for _ in 1..m { for c in 1..n as usize { dp[c] += dp[c - 1]; } }
        dp[n as usize - 1]
    }
}
