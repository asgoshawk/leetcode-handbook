impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        use std::collections::HashMap;

        let mut seen = HashMap::new();
        for (index, value) in nums.into_iter().enumerate() {
            let complement = target - value;
            if let Some(&previous_index) = seen.get(&complement) {
                return vec![previous_index as i32, index as i32];
            }
            seen.insert(value, index);
        }

        vec![]
    }
}
