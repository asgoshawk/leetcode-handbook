impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let (m, n) = (matrix.len(), matrix[0].len());
        let (mut left, mut right) = (0i32, (m * n) as i32 - 1);
        while left <= right {
            let mid = left + (right - left) / 2;
            let value = matrix[mid as usize / n][mid as usize % n];
            if value == target { return true; }
            if value < target { left = mid + 1; } else { right = mid - 1; }
        }
        false
    }
}
