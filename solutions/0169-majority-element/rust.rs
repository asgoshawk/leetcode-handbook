impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let (mut candidate, mut count) = (0, 0);
        for number in nums {
            if count == 0 { candidate = number; }
            count += if number == candidate { 1 } else { -1 };
        }
        candidate
    }
}
