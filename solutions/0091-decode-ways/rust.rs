impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let bytes = s.as_bytes();
        let (mut prev2, mut prev1) = (1, if bytes[0] == b'0' { 0 } else { 1 });
        for i in 1..bytes.len() {
            let mut current = if bytes[i] == b'0' { 0 } else { prev1 };
            let two = (bytes[i - 1] - b'0') * 10 + (bytes[i] - b'0');
            if (10..=26).contains(&two) { current += prev2; }
            prev2 = prev1;
            prev1 = current;
        }
        prev1
    }
}
