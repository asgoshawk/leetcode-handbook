impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let (mut left, mut right) = (0_i32, nums.len() as i32 - 1);
        while left <= right {
            let middle = left + (right - left) / 2;
            let (l, m, r) = (left as usize, middle as usize, right as usize);
            if nums[m] == target { return middle; }
            if nums[l] <= nums[m] {
                if nums[l] <= target && target < nums[m] { right = middle - 1; }
                else { left = middle + 1; }
            } else if nums[m] < target && target <= nums[r] { left = middle + 1; }
            else { right = middle - 1; }
        }
        -1
    }
}
