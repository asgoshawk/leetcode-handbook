impl Solution {
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(node) = root.as_ref() {
            let (left, right) = {
                let mut current = node.borrow_mut();
                (current.left.take(), current.right.take())
            };
            let mut current = node.borrow_mut();
            current.left = Self::invert_tree(right);
            current.right = Self::invert_tree(left);
        }
        root
    }
}
