import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).parents[2]


def load(path: str):
    spec = importlib.util.spec_from_file_location("solution", ROOT / "solutions" / path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class SolutionTests(unittest.TestCase):
    def test_two_sum(self):
        solution = load("0001-two-sum/python.py").Solution()
        self.assertEqual(solution.twoSum([2, 7, 11, 15], 9), [0, 1])
        self.assertEqual(solution.twoSum([3, 3], 6), [0, 1])

    def test_valid_parentheses(self):
        solution = load("0020-valid-parentheses/python.py").Solution()
        self.assertTrue(solution.isValid("()[]{}"))
        self.assertFalse(solution.isValid("([)]"))
        self.assertFalse(solution.isValid("("))

    def test_binary_search(self):
        solution = load("0704-binary-search/python.py").Solution()
        self.assertEqual(solution.search([-1, 0, 3, 5, 9, 12], 9), 4)
        self.assertEqual(solution.search([-1, 0, 3, 5, 9, 12], 2), -1)
        self.assertEqual(solution.search([], 1), -1)

    def test_reverse_linked_list(self):
        solution = load("0206-reverse-linked-list/python.py").Solution()
        head = ListNode(1, ListNode(2, ListNode(3)))
        reversed_head = solution.reverseList(head)
        self.assertEqual([reversed_head.val, reversed_head.next.val, reversed_head.next.next.val], [3, 2, 1])
        self.assertIsNone(solution.reverseList(None))

    def test_maximum_depth(self):
        solution = load("0104-maximum-depth-of-binary-tree/python.py").Solution()
        self.assertEqual(solution.maxDepth(None), 0)
        self.assertEqual(solution.maxDepth(TreeNode(1, TreeNode(2))), 2)


if __name__ == "__main__":
    unittest.main()
