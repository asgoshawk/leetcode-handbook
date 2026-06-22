class Solution:
    def mergeKLists(self, lists):
        def merge(a, b):
            dummy = ListNode()
            tail = dummy
            while a and b:
                if a.val <= b.val:
                    tail.next, a = a, a.next
                else:
                    tail.next, b = b, b.next
                tail = tail.next
            tail.next = a or b
            return dummy.next

        while len(lists) > 1:
            lists = [merge(lists[i], lists[i + 1] if i + 1 < len(lists) else None)
                     for i in range(0, len(lists), 2)]
        return lists[0] if lists else None
