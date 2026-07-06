impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        fn dfs(left: i32, right: i32, path: &mut String, result: &mut Vec<String>) {
            if left == 0 && right == 0 { result.push(path.clone()); return; }
            if left > 0 { path.push('('); dfs(left - 1, right, path, result); path.pop(); }
            if right > left { path.push(')'); dfs(left, right - 1, path, result); path.pop(); }
        }
        let mut result = Vec::new();
        dfs(n, n, &mut String::new(), &mut result);
        result
    }
}
