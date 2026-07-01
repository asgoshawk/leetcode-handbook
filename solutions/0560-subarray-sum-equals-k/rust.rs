impl Solution {
    pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
        use std::collections::HashMap;
        let mut count = HashMap::from([(0, 1)]);
        let (mut prefix, mut result) = (0, 0);
        for num in nums {
            prefix += num;
            result += count.get(&(prefix - k)).copied().unwrap_or(0);
            *count.entry(prefix).or_insert(0) += 1;
        }
        result
    }
}
