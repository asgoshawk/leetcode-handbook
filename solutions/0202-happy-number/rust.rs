impl Solution {
    pub fn is_happy(mut n: i32) -> bool {
        use std::collections::HashSet;
        fn next_value(mut x: i32) -> i32 { let mut total = 0; while x > 0 { let d = x % 10; total += d * d; x /= 10; } total }
        let mut seen = HashSet::new();
        while n != 1 && seen.insert(n) { n = next_value(n); }
        n == 1
    }
}
