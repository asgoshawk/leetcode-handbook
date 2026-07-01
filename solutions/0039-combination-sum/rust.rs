impl Solution {
    pub fn combination_sum(mut candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        candidates.sort_unstable();
        fn dfs(start: usize, remain: i32, nums: &[i32], path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
            if remain == 0 { result.push(path.clone()); return; }
            for i in start..nums.len() {
                if nums[i] > remain { break; }
                path.push(nums[i]); dfs(i, remain - nums[i], nums, path, result); path.pop();
            }
        }
        let mut result = Vec::new();
        dfs(0, target, &candidates, &mut Vec::new(), &mut result);
        result
    }
}
