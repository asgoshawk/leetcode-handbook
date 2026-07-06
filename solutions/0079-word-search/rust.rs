impl Solution {
    pub fn exist(mut board: Vec<Vec<char>>, word: String) -> bool {
        fn dfs(board: &mut [Vec<char>], word: &[char], r: i32, c: i32, i: usize) -> bool {
            if i == word.len() { return true; }
            if r < 0 || c < 0 || r as usize >= board.len() || c as usize >= board[0].len() || board[r as usize][c as usize] != word[i] { return false; }
            let saved = board[r as usize][c as usize];
            board[r as usize][c as usize] = '#';
            let ok = dfs(board, word, r + 1, c, i + 1) || dfs(board, word, r - 1, c, i + 1) || dfs(board, word, r, c + 1, i + 1) || dfs(board, word, r, c - 1, i + 1);
            board[r as usize][c as usize] = saved;
            ok
        }
        let word: Vec<char> = word.chars().collect();
        for r in 0..board.len() { for c in 0..board[0].len() { if dfs(&mut board, &word, r as i32, c as i32, 0) { return true; } } }
        false
    }
}
