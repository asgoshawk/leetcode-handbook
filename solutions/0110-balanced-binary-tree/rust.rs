impl Solution {
    pub fn is_balanced(root: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) -> bool {
        fn height(node: &Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) -> i32 {
            let Some(node) = node else { return 0; };
            let node = node.borrow();
            let left = height(&node.left); if left == -1 { return -1; }
            let right = height(&node.right); if right == -1 { return -1; }
            if (left - right).abs() > 1 { -1 } else { left.max(right) + 1 }
        }
        height(&root) != -1
    }
}
