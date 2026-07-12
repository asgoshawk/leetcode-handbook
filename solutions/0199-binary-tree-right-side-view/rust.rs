impl Solution {
    pub fn right_side_view(root: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) -> Vec<i32> {
        let Some(root) = root else { return vec![]; };
        let mut result = Vec::new();
        let mut queue = std::collections::VecDeque::from([root]);
        while !queue.is_empty() {
            let size = queue.len();
            for i in 0..size {
                let node = queue.pop_front().unwrap();
                let node_ref = node.borrow();
                if i + 1 == size { result.push(node_ref.val); }
                if let Some(left) = node_ref.left.clone() { queue.push_back(left); }
                if let Some(right) = node_ref.right.clone() { queue.push_back(right); }
            }
        }
        result
    }
}
