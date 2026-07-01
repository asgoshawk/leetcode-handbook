impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let bytes = s.as_bytes();
        let (mut best_start, mut best_len) = (0usize, 1usize);
        fn expand(bytes: &[u8], mut left: i32, mut right: i32) -> (usize, usize) {
            while left >= 0 && (right as usize) < bytes.len() && bytes[left as usize] == bytes[right as usize] {
                left -= 1; right += 1;
            }
            ((left + 1) as usize, (right - left - 1) as usize)
        }
        for i in 0..bytes.len() {
            for (start, len) in [expand(bytes, i as i32, i as i32), expand(bytes, i as i32, i as i32 + 1)] {
                if len > best_len { best_start = start; best_len = len; }
            }
        }
        s[best_start..best_start + best_len].to_string()
    }
}
