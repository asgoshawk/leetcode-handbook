impl Solution {
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut values = Vec::new();
        let mut current = head;
        while let Some(node) = current {
            values.push(node.val);
            current = node.next;
        }
        for i in (1..values.len()).step_by(2) {
            values.swap(i - 1, i);
        }
        values.into_iter().rev().fold(None, |next, val| Some(Box::new(ListNode { val, next })))
    }
}
