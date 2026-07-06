impl Solution {
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut values = Vec::new();
        let mut cur = head;
        while let Some(node) = cur { values.push(node.val); cur = node.next; }
        let idx = values.len() - n as usize;
        values.remove(idx);
        values.into_iter().rev().fold(None, |next, val| Some(Box::new(ListNode { val, next })))
    }
}
