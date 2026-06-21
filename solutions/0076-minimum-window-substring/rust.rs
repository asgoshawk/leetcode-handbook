impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        let mut need = [0_i32; 128];
        for byte in t.bytes() { need[byte as usize] += 1; }

        let bytes = s.as_bytes();
        let (mut left, mut missing) = (0, t.len() as i32);
        let (mut best_start, mut best_length) = (0, usize::MAX);

        for right in 0..bytes.len() {
            let added = bytes[right] as usize;
            if need[added] > 0 { missing -= 1; }
            need[added] -= 1;

            while missing == 0 {
                if right - left + 1 < best_length {
                    (best_start, best_length) = (left, right - left + 1);
                }
                let removed = bytes[left] as usize;
                need[removed] += 1;
                if need[removed] > 0 { missing += 1; }
                left += 1;
            }
        }
        if best_length == usize::MAX { String::new() }
        else { s[best_start..best_start + best_length].to_string() }
    }
}
