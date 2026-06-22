impl Solution {
    pub fn merge_k_lists(mut lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
        while lists.len() > 1 {
            let mut next = Vec::with_capacity((lists.len() + 1) / 2);
            let mut iter = lists.into_iter();
            while let Some(a) = iter.next() {
                next.push(Self::merge(a, iter.next().unwrap_or(None)));
            }
            lists = next;
        }
        lists.pop().unwrap_or(None)
    }

    fn merge(a: Option<Box<ListNode>>, b: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        match (a, b) {
            (None, list) | (list, None) => list,
            (Some(mut a), Some(mut b)) => {
                if a.val <= b.val {
                    a.next = Self::merge(a.next.take(), Some(b));
                    Some(a)
                } else {
                    b.next = Self::merge(Some(a), b.next.take());
                    Some(b)
                }
            }
        }
    }
}
