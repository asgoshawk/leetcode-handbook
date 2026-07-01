impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![vec![]];
        for num in nums {
            let mut extra = Vec::new();
            for subset in &result { let mut next = subset.clone(); next.push(num); extra.push(next); }
            result.extend(extra);
        }
        result
    }
}
