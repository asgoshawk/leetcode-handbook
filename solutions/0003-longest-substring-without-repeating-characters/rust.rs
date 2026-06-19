impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        use std::collections::HashMap;

        let mut last_seen = HashMap::new();
        let mut left = 0;
        let mut best = 0;

        for (right, character) in s.chars().enumerate() {
            if let Some(&next_position) = last_seen.get(&character) {
                left = left.max(next_position);
            }
            best = best.max(right - left + 1);
            last_seen.insert(character, right + 1);
        }

        best as i32
    }
}
