impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        use std::collections::HashMap;
        let mut counts = HashMap::new();
        for &number in &nums { *counts.entry(number).or_insert(0) += 1; }
        let mut buckets = vec![Vec::new(); nums.len() + 1];
        for (number, count) in counts { buckets[count].push(number); }
        let mut result = Vec::new();
        for bucket in buckets.into_iter().rev() {
            result.extend(bucket);
            if result.len() >= k as usize { break; }
        }
        result.truncate(k as usize);
        result
    }
}
