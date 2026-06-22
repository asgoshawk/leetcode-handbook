impl Solution {
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        let mut tails = Vec::new();
        for number in nums {
            let index = tails.partition_point(|&tail| tail < number);
            if index == tails.len() { tails.push(number); } else { tails[index] = number; }
        }
        tails.len() as i32
    }
}
