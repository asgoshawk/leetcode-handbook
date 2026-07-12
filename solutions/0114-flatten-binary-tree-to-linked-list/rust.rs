impl Solution {
    pub fn flatten(root: &mut Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>) {
        fn preorder(node: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>, values: &mut Vec<i32>) {
            if let Some(node) = node {
                let node_ref = node.borrow();
                values.push(node_ref.val);
                preorder(node_ref.left.clone(), values);
                preorder(node_ref.right.clone(), values);
            }
        }
        let mut values = Vec::new();
        preorder(root.clone(), &mut values);
        let mut next = None;
        for value in values.into_iter().rev() {
            next = Some(std::rc::Rc::new(std::cell::RefCell::new(TreeNode { val: value, left: None, right: next })));
        }
        *root = next;
    }
}
