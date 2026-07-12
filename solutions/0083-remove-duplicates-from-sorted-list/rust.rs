impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut values = Vec::new();
        let mut current = head;
        while let Some(node) = current {
            if values.last() != Some(&node.val) {
                values.push(node.val);
            }
            current = node.next;
        }
        values.into_iter().rev().fold(None, |next, val| Some(Box::new(ListNode { val, next })))
    }
}
