impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut bits = vec![0; n as usize + 1];
        for i in 1..=n as usize { bits[i] = bits[i >> 1] + (i as i32 & 1); }
        bits
    }
}
