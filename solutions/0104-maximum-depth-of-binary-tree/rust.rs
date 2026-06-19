use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        match root {
            None => 0,
            Some(node) => {
                let node = node.borrow();
                1 + Self::max_depth(node.left.clone()).max(Self::max_depth(node.right.clone()))
            }
        }
    }
}
