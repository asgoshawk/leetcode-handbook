impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut seen = std::collections::HashSet::new();
        for r in 0..9 {
            for c in 0..9 {
                let value = board[r][c];
                if value == '.' { continue; }
                let b = (r / 3) * 3 + c / 3;
                if !seen.insert((0, r, value)) || !seen.insert((1, c, value)) || !seen.insert((2, b, value)) {
                    return false;
                }
            }
        }
        true
    }
}
