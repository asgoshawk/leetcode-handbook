impl Solution {
    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        fn dfs(start: usize, nums: &[i32], path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
            result.push(path.clone());
            for i in start..nums.len() {
                if i > start && nums[i] == nums[i - 1] { continue; }
                path.push(nums[i]); dfs(i + 1, nums, path, result); path.pop();
            }
        }
        let mut result = Vec::new();
        dfs(0, &nums, &mut Vec::new(), &mut result);
        result
    }
}
