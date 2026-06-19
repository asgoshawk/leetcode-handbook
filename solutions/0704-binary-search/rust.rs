impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0_i32;
        let mut right = nums.len() as i32 - 1;

        while left <= right {
            let middle = left + (right - left) / 2;
            match nums[middle as usize].cmp(&target) {
                std::cmp::Ordering::Equal => return middle,
                std::cmp::Ordering::Less => left = middle + 1,
                std::cmp::Ordering::Greater => right = middle - 1,
            }
        }

        -1
    }
}
