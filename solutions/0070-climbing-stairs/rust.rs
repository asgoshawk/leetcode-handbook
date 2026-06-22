impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let (mut previous, mut current) = (0, 1);
        for _ in 0..n { (previous, current) = (current, previous + current); }
        current
    }
}
