impl Solution {
    pub fn remove_elements(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
        let mut values = Vec::new();
        let mut current = head;
        while let Some(node) = current {
            if node.val != val { values.push(node.val); }
            current = node.next;
        }
        values.into_iter().rev().fold(None, |next, val| Some(Box::new(ListNode { val, next })))
    }
}
