impl Solution {
    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
        use std::collections::VecDeque;
        let (k, mut candidates, mut result) = (k as usize, VecDeque::new(), Vec::new());
        for i in 0..nums.len() {
            while candidates.front().is_some_and(|&index| index + k <= i) { candidates.pop_front(); }
            while candidates.back().is_some_and(|&index| nums[index] <= nums[i]) { candidates.pop_back(); }
            candidates.push_back(i);
            if i + 1 >= k { result.push(nums[*candidates.front().unwrap()]); }
        }
        result
    }
}
