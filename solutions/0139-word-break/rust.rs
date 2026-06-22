impl Solution {
    pub fn word_break(s: String, word_dict: Vec<String>) -> bool {
        use std::collections::HashSet;
        let words: HashSet<&str> = word_dict.iter().map(String::as_str).collect();
        let mut reachable = vec![false; s.len() + 1];
        reachable[0] = true;
        for end in 1..=s.len() {
            for start in 0..end {
                if reachable[start] && words.contains(&s[start..end]) {
                    reachable[end] = true;
                    break;
                }
            }
        }
        reachable[s.len()]
    }
}
