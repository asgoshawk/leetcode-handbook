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

mod longest_substring {
    pub struct Solution;
    include!("../../../solutions/0003-longest-substring-without-repeating-characters/rust.rs");

    #[test]
    fn handles_repeated_and_empty_strings() {
        assert_eq!(Solution::length_of_longest_substring("abcabcbb".into()), 3);
        assert_eq!(Solution::length_of_longest_substring("abba".into()), 2);
        assert_eq!(Solution::length_of_longest_substring("".into()), 0);
    }
}

mod house_robber {
    pub struct Solution;
    include!("../../../solutions/0198-house-robber/rust.rs");

    #[test]
    fn chooses_the_best_non_adjacent_values() {
        assert_eq!(Solution::rob(vec![1, 2, 3, 1]), 4);
        assert_eq!(Solution::rob(vec![2, 7, 9, 3, 1]), 12);
        assert_eq!(Solution::rob(vec![]), 0);
    }
}

mod trapping_rain_water {
    pub struct Solution;
    include!("../../../solutions/0042-trapping-rain-water/rust.rs");

    #[test]
    fn handles_valleys_and_short_inputs() {
        assert_eq!(Solution::trap(vec![0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
        assert_eq!(Solution::trap(vec![4, 2, 0, 3, 2, 5]), 9);
        assert_eq!(Solution::trap(vec![]), 0);
    }
}

mod three_sum {
    pub struct Solution;
    include!("../../../solutions/0015-3sum/rust.rs");

    #[test]
    fn finds_unique_triplets() {
        assert_eq!(Solution::three_sum(vec![-1, 0, 1, 2, -1, -4]), vec![vec![-1, -1, 2], vec![-1, 0, 1]]);
        assert_eq!(Solution::three_sum(vec![0, 0, 0]), vec![vec![0, 0, 0]]);
    }
}

mod group_anagrams {
    pub struct Solution;
    include!("../../../solutions/0049-group-anagrams/rust.rs");

    #[test]
    fn groups_by_character_multiset() {
        let words = ["eat", "tea", "tan", "ate", "nat", "bat"].map(String::from).to_vec();
        let mut groups: Vec<String> = Solution::group_anagrams(words).into_iter().map(|mut group| {
            group.sort();
            group.join(",")
        }).collect();
        groups.sort();
        assert_eq!(groups, vec!["ate,eat,tea", "bat", "nat,tan"]);
    }
}

mod minimum_window {
    pub struct Solution;
    include!("../../../solutions/0076-minimum-window-substring/rust.rs");

    #[test]
    fn handles_multiplicity_and_missing_windows() {
        assert_eq!(Solution::min_window("ADOBECODEBANC".into(), "ABC".into()), "BANC");
        assert_eq!(Solution::min_window("a".into(), "aa".into()), "");
    }
}

mod stock_profit {
    pub struct Solution;
    include!("../../../solutions/0121-best-time-to-buy-and-sell-stock/rust.rs");

    #[test]
    fn keeps_transaction_order() {
        assert_eq!(Solution::max_profit(vec![7, 1, 5, 3, 6, 4]), 5);
        assert_eq!(Solution::max_profit(vec![7, 6, 4, 3, 1]), 0);
    }
}

mod number_of_islands {
    pub struct Solution;
    include!("../../../solutions/0200-number-of-islands/rust.rs");

    #[test]
    fn counts_four_directional_components() {
        let grid = vec![vec!['1', '1', '0'], vec!['1', '0', '0'], vec!['0', '0', '1']];
        assert_eq!(Solution::num_islands(grid), 2);
    }
}

mod contains_duplicate {
    pub struct Solution;
    include!("../../../solutions/0217-contains-duplicate/rust.rs");

    #[test]
    fn distinguishes_unique_arrays() {
        assert!(Solution::contains_duplicate(vec![1, 2, 3, 1]));
        assert!(!Solution::contains_duplicate(vec![1, 2, 3, 4]));
    }
}

mod invert_tree {
    use std::cell::RefCell;
    use std::rc::Rc;

    #[derive(Debug, PartialEq, Eq)]
    pub struct TreeNode {
        pub val: i32,
        pub left: Option<Rc<RefCell<TreeNode>>>,
        pub right: Option<Rc<RefCell<TreeNode>>>,
    }
    pub struct Solution;
    include!("../../../solutions/0226-invert-binary-tree/rust.rs");

    #[test]
    fn swaps_every_subtree() {
        let left = Rc::new(RefCell::new(TreeNode { val: 1, left: None, right: None }));
        let right = Rc::new(RefCell::new(TreeNode { val: 3, left: None, right: None }));
        let root = Rc::new(RefCell::new(TreeNode { val: 2, left: Some(left), right: Some(right) }));
        let inverted = Solution::invert_tree(Some(root)).unwrap();
        let node = inverted.borrow();
        assert_eq!(node.left.as_ref().unwrap().borrow().val, 3);
        assert_eq!(node.right.as_ref().unwrap().borrow().val, 1);
    }
}

mod product_except_self {
    pub struct Solution;
    include!("../../../solutions/0238-product-of-array-except-self/rust.rs");

    #[test]
    fn handles_zero_values() {
        assert_eq!(Solution::product_except_self(vec![1, 2, 3, 4]), vec![24, 12, 8, 6]);
        assert_eq!(Solution::product_except_self(vec![-1, 1, 0, -3, 3]), vec![0, 0, 9, 0, 0]);
    }
}

mod valid_anagram {
    pub struct Solution;
    include!("../../../solutions/0242-valid-anagram/rust.rs");

    #[test]
    fn compares_character_frequencies() {
        assert!(Solution::is_anagram("anagram".into(), "nagaram".into()));
        assert!(!Solution::is_anagram("rat".into(), "car".into()));
    }
}

mod coin_change {
    pub struct Solution;
    include!("../../../solutions/0322-coin-change/rust.rs");

    #[test]
    fn finds_minimum_or_reports_impossibility() {
        assert_eq!(Solution::coin_change(vec![1, 2, 5], 11), 3);
        assert_eq!(Solution::coin_change(vec![2], 3), -1);
        assert_eq!(Solution::coin_change(vec![1], 0), 0);
    }
}
