impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() { return false; }
        let mut counts = [0_i32; 26];
        for byte in s.bytes() { counts[(byte - b'a') as usize] += 1; }
        for byte in t.bytes() { counts[(byte - b'a') as usize] -= 1; }
        counts.into_iter().all(|count| count == 0)
    }
}
