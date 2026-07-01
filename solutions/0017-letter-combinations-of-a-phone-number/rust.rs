impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        if digits.is_empty() { return vec![]; }
        let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        fn dfs(i: usize, digits: &[u8], map: &[&str; 10], path: &mut String, result: &mut Vec<String>) {
            if i == digits.len() { result.push(path.clone()); return; }
            for ch in map[(digits[i] - b'0') as usize].chars() {
                path.push(ch); dfs(i + 1, digits, map, path, result); path.pop();
            }
        }
        let mut result = Vec::new();
        dfs(0, digits.as_bytes(), &map, &mut String::new(), &mut result);
        result
    }
}
