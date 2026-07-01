impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        let (mut top, mut bottom, mut left, mut right) = (0i32, matrix.len() as i32 - 1, 0i32, matrix[0].len() as i32 - 1);
        let mut result = Vec::new();
        while top <= bottom && left <= right {
            for c in left..=right { result.push(matrix[top as usize][c as usize]); }
            top += 1;
            for r in top..=bottom { result.push(matrix[r as usize][right as usize]); }
            right -= 1;
            if top <= bottom { for c in (left..=right).rev() { result.push(matrix[bottom as usize][c as usize]); } bottom -= 1; }
            if left <= right { for r in (top..=bottom).rev() { result.push(matrix[r as usize][left as usize]); } left += 1; }
        }
        result
    }
}
