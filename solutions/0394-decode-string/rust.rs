impl Solution {
    pub fn decode_string(s: String) -> String {
        let mut stack: Vec<(String, usize)> = Vec::new();
        let (mut current, mut num) = (String::new(), 0usize);
        for ch in s.chars() {
            if ch.is_ascii_digit() { num = num * 10 + ch.to_digit(10).unwrap() as usize; }
            else if ch == '[' { stack.push((current, num)); current = String::new(); num = 0; }
            else if ch == ']' { let (prev, count) = stack.pop().unwrap(); current = prev + &current.repeat(count); }
            else { current.push(ch); }
        }
        current
    }
}
