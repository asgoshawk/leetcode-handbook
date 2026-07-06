impl Solution {
    pub fn kth_smallest(root: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>, mut k: i32) -> i32 {
        let mut stack = Vec::new();
        let mut node = root;
        while node.is_some() || !stack.is_empty() {
            while let Some(cur) = node { node = cur.borrow().left.clone(); stack.push(cur); }
            let cur = stack.pop().unwrap();
            k -= 1;
            if k == 0 { return cur.borrow().val; }
            node = cur.borrow().right.clone();
        }
        unreachable!()
    }
}
