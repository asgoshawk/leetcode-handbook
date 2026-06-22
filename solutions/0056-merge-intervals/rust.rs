impl Solution {
    pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        intervals.sort_unstable_by_key(|interval| interval[0]);
        let mut result: Vec<Vec<i32>> = Vec::new();
        for interval in intervals {
            if result.last().is_none_or(|last| last[1] < interval[0]) {
                result.push(interval);
            } else {
                let last = result.last_mut().unwrap();
                last[1] = last[1].max(interval[1]);
            }
        }
        result
    }
}
