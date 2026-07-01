impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        let (m, n) = (matrix.len(), matrix[0].len());
        let first_row = matrix[0].iter().any(|&x| x == 0);
        let first_col = (0..m).any(|r| matrix[r][0] == 0);
        for r in 1..m { for c in 1..n { if matrix[r][c] == 0 { matrix[r][0] = 0; matrix[0][c] = 0; } } }
        for r in 1..m { for c in 1..n { if matrix[r][0] == 0 || matrix[0][c] == 0 { matrix[r][c] = 0; } } }
        if first_row { for c in 0..n { matrix[0][c] = 0; } }
        if first_col { for r in 0..m { matrix[r][0] = 0; } }
    }
}
