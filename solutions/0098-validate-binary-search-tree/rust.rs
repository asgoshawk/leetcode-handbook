impl Solution {
    pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        fn valid(node: Option<Rc<RefCell<TreeNode>>>, lower: i64, upper: i64) -> bool {
            let Some(node) = node else { return true };
            let node = node.borrow();
            let value = node.val as i64;
            lower < value && value < upper
                && valid(node.left.clone(), lower, value)
                && valid(node.right.clone(), value, upper)
        }
        valid(root, i64::MIN, i64::MAX)
    }
}
