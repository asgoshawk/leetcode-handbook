impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let mut iter = s.bytes();
        let mut need = iter.next();
        if need.is_none() { return true; }
        for b in t.bytes() {
            if Some(b) == need {
                need = iter.next();
                if need.is_none() { return true; }
            }
        }
        false
    }
}
