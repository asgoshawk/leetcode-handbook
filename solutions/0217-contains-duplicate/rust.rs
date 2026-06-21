impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        use std::collections::HashSet;

        let mut seen = HashSet::new();
        for value in nums {
            if !seen.insert(value) { return true; }
        }
        false
    }
}
