impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut expected = Vec::new();

        for character in s.chars() {
            match character {
                '(' => expected.push(')'),
                '[' => expected.push(']'),
                '{' => expected.push('}'),
                closing if expected.pop() != Some(closing) => return false,
                _ => {}
            }
        }

        expected.is_empty()
    }
}
