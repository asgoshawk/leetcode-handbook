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

    def test_longest_substring(self):
        solution = load("0003-longest-substring-without-repeating-characters/python.py").Solution()
        self.assertEqual(solution.lengthOfLongestSubstring("abcabcbb"), 3)
        self.assertEqual(solution.lengthOfLongestSubstring("abba"), 2)
        self.assertEqual(solution.lengthOfLongestSubstring(""), 0)

    def test_house_robber(self):
        solution = load("0198-house-robber/python.py").Solution()
        self.assertEqual(solution.rob([1, 2, 3, 1]), 4)
        self.assertEqual(solution.rob([2, 7, 9, 3, 1]), 12)
        self.assertEqual(solution.rob([]), 0)

    def test_trapping_rain_water(self):
        solution = load("0042-trapping-rain-water/python.py").Solution()
        self.assertEqual(solution.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)
        self.assertEqual(solution.trap([4, 2, 0, 3, 2, 5]), 9)
        self.assertEqual(solution.trap([]), 0)

    def test_three_sum(self):
        solution = load("0015-3sum/python.py").Solution()
        self.assertEqual(solution.threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]])
        self.assertEqual(solution.threeSum([0, 0, 0]), [[0, 0, 0]])

    def test_group_anagrams(self):
        solution = load("0049-group-anagrams/python.py").Solution()
        groups = sorted(",".join(sorted(group)) for group in solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
        self.assertEqual(groups, ["ate,eat,tea", "bat", "nat,tan"])

    def test_minimum_window(self):
        solution = load("0076-minimum-window-substring/python.py").Solution()
        self.assertEqual(solution.minWindow("ADOBECODEBANC", "ABC"), "BANC")
        self.assertEqual(solution.minWindow("a", "aa"), "")

    def test_max_profit(self):
        solution = load("0121-best-time-to-buy-and-sell-stock/python.py").Solution()
        self.assertEqual(solution.maxProfit([7, 1, 5, 3, 6, 4]), 5)
        self.assertEqual(solution.maxProfit([7, 6, 4, 3, 1]), 0)

    def test_number_of_islands(self):
        solution = load("0200-number-of-islands/python.py").Solution()
        self.assertEqual(solution.numIslands([["1", "1", "0"], ["1", "0", "0"], ["0", "0", "1"]]), 2)

    def test_contains_duplicate(self):
        solution = load("0217-contains-duplicate/python.py").Solution()
        self.assertTrue(solution.containsDuplicate([1, 2, 3, 1]))
        self.assertFalse(solution.containsDuplicate([1, 2, 3, 4]))

    def test_invert_binary_tree(self):
        solution = load("0226-invert-binary-tree/python.py").Solution()
        root = TreeNode(2, TreeNode(1), TreeNode(3))
        inverted = solution.invertTree(root)
        self.assertEqual([inverted.val, inverted.left.val, inverted.right.val], [2, 3, 1])
        self.assertIsNone(solution.invertTree(None))

    def test_product_except_self(self):
        solution = load("0238-product-of-array-except-self/python.py").Solution()
        self.assertEqual(solution.productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
        self.assertEqual(solution.productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])

    def test_valid_anagram(self):
        solution = load("0242-valid-anagram/python.py").Solution()
        self.assertTrue(solution.isAnagram("anagram", "nagaram"))
        self.assertFalse(solution.isAnagram("rat", "car"))

    def test_coin_change(self):
        solution = load("0322-coin-change/python.py").Solution()
        self.assertEqual(solution.coinChange([1, 2, 5], 11), 3)
        self.assertEqual(solution.coinChange([2], 3), -1)
        self.assertEqual(solution.coinChange([1], 0), 0)


if __name__ == "__main__":
    unittest.main()
