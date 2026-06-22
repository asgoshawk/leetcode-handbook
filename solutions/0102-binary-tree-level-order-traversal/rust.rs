impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let Some(root) = root else { return vec![] };
        let mut result = Vec::new();
        let mut queue = VecDeque::from([root]);
        while !queue.is_empty() {
            let mut level = Vec::new();
            for _ in 0..queue.len() {
                let node = queue.pop_front().unwrap();
                let node = node.borrow();
                level.push(node.val);
                if let Some(left) = node.left.clone() { queue.push_back(left); }
                if let Some(right) = node.right.clone() { queue.push_back(right); }
            }
            result.push(level);
        }
        result
    }
}
