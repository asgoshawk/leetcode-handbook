impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut counts = [0; 26];
        for b in magazine.bytes() { counts[(b - b'a') as usize] += 1; }
        for b in ransom_note.bytes() {
            let i = (b - b'a') as usize;
            if counts[i] == 0 { return false; }
            counts[i] -= 1;
        }
        true
    }
}
