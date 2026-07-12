impl Solution {
    pub fn zigzag_level_order(root: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let Some(root) = root else { return vec![]; };
        let mut queue = std::collections::VecDeque::from([root]);
        let mut result = Vec::new();
        let mut left_to_right = true;
        while !queue.is_empty() {
            let mut level = Vec::new();
            for _ in 0..queue.len() {
                let node = queue.pop_front().unwrap();
                let node = node.borrow();
                level.push(node.val);
                if let Some(left) = node.left.clone() { queue.push_back(left); }
                if let Some(right) = node.right.clone() { queue.push_back(right); }
            }
            if !left_to_right { level.reverse(); }
            result.push(level);
            left_to_right = !left_to_right;
        }
        result
    }
}
