impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let (mut lowest, mut best) = (i32::MAX, 0);
        for price in prices {
            lowest = lowest.min(price);
            best = best.max(price - lowest);
        }
        best
    }
}
