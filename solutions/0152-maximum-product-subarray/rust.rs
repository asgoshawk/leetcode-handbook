impl Solution {
    pub fn max_product(nums: Vec<i32>) -> i32 {
        let (mut max_here, mut min_here, mut best) = (nums[0], nums[0], nums[0]);
        for &x in nums.iter().skip(1) {
            if x < 0 { std::mem::swap(&mut max_here, &mut min_here); }
            max_here = x.max(max_here * x);
            min_here = x.min(min_here * x);
            best = best.max(max_here);
        }
        best
    }
}
