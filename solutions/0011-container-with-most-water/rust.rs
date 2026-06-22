impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let (mut left, mut right, mut best) = (0, height.len() - 1, 0);
        while left < right {
            best = best.max(height[left].min(height[right]) * (right - left) as i32);
            if height[left] <= height[right] { left += 1; } else { right -= 1; }
        }
        best
    }
}
