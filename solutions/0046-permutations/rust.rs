impl Solution {
    pub fn permute(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        fn visit(first: usize, nums: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
            if first == nums.len() { result.push(nums.clone()); }
            for i in first..nums.len() {
                nums.swap(first, i);
                visit(first + 1, nums, result);
                nums.swap(first, i);
            }
        }
        let mut result = Vec::new();
        visit(0, &mut nums, &mut result);
        result
    }
}
