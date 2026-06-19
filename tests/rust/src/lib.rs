#![allow(dead_code)]

mod two_sum {
    pub struct Solution;
    include!("../../../solutions/0001-two-sum/rust.rs");

    #[test]
    fn finds_values_and_handles_duplicates() {
        assert_eq!(Solution::two_sum(vec![2, 7, 11, 15], 9), vec![0, 1]);
        assert_eq!(Solution::two_sum(vec![3, 3], 6), vec![0, 1]);
    }
}

mod valid_parentheses {
    pub struct Solution;
    include!("../../../solutions/0020-valid-parentheses/rust.rs");

    #[test]
    fn checks_nested_and_leftover_brackets() {
        assert!(Solution::is_valid("()[]{}".into()));
        assert!(!Solution::is_valid("([)]".into()));
        assert!(!Solution::is_valid("(".into()));
    }
}

mod binary_search {
    pub struct Solution;
    include!("../../../solutions/0704-binary-search/rust.rs");

    #[test]
    fn handles_hits_misses_and_empty_input() {
        assert_eq!(Solution::search(vec![-1, 0, 3, 5, 9, 12], 9), 4);
        assert_eq!(Solution::search(vec![-1, 0, 3, 5, 9, 12], 2), -1);
        assert_eq!(Solution::search(vec![], 1), -1);
    }
}

mod reverse_list {
    #[derive(PartialEq, Eq, Clone, Debug)]
    pub struct ListNode {
        pub val: i32,
        pub next: Option<Box<ListNode>>,
    }
    pub struct Solution;
    include!("../../../solutions/0206-reverse-linked-list/rust.rs");

    fn list(values: &[i32]) -> Option<Box<ListNode>> {
        values.iter().rev().fold(None, |next, &val| Some(Box::new(ListNode { val, next })))
    }

    #[test]
    fn reverses_a_list_and_handles_none() {
        assert_eq!(Solution::reverse_list(list(&[1, 2, 3])), list(&[3, 2, 1]));
        assert_eq!(Solution::reverse_list(None), None);
    }
}

mod tree_depth {
    #[derive(Debug, PartialEq, Eq)]
    pub struct TreeNode {
        pub val: i32,
        pub left: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>,
        pub right: Option<std::rc::Rc<std::cell::RefCell<TreeNode>>>,
    }
    pub struct Solution;
    include!("../../../solutions/0104-maximum-depth-of-binary-tree/rust.rs");

    #[test]
    fn handles_empty_and_skewed_trees() {
        let child = Rc::new(RefCell::new(TreeNode { val: 2, left: None, right: None }));
        let root = Rc::new(RefCell::new(TreeNode { val: 1, left: Some(child), right: None }));
        assert_eq!(Solution::max_depth(None), 0);
        assert_eq!(Solution::max_depth(Some(root)), 2);
    }
}
