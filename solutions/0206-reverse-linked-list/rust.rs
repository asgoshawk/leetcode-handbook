impl Solution {
    pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut previous = None;

        while let Some(mut current) = head {
            head = current.next.take();
            current.next = previous;
            previous = Some(current);
        }

        previous
    }
}
