impl Solution {
    pub fn is_symmetric(root: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) -> bool {
        fn mirror(a: &Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>, b: &Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) -> bool {
            match (a, b) {
                (None, None) => true,
                (Some(x), Some(y)) => {
                    let xb = x.borrow(); let yb = y.borrow();
                    xb.val == yb.val && mirror(&xb.left, &yb.right) && mirror(&xb.right, &yb.left)
                }
                _ => false,
            }
        }
        let Some(root) = root else { return true; };
        let node = root.borrow();
        mirror(&node.left, &node.right)
    }
}
