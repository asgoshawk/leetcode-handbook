impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let mut prefix = strs[0].clone();
        for word in strs.iter().skip(1) {
            while !word.starts_with(&prefix) {
                prefix.pop();
                if prefix.is_empty() { return prefix; }
            }
        }
        prefix
    }
}
