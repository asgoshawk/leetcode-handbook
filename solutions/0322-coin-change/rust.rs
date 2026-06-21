impl Solution {
    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
        let mut minimum = vec![amount + 1; amount as usize + 1];
        minimum[0] = 0;
        for subtotal in 1..=amount as usize {
            for &coin in &coins {
                if coin as usize <= subtotal {
                    minimum[subtotal] = minimum[subtotal].min(minimum[subtotal - coin as usize] + 1);
                }
            }
        }
        if minimum[amount as usize] > amount { -1 } else { minimum[amount as usize] }
    }
}
