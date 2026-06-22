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

    def test_new_array_and_string_problems(self):
        self.assertEqual(load("0011-container-with-most-water/python.py").Solution().maxArea([1,8,6,2,5,4,8,3,7]), 49)
        rotated = load("0033-search-in-rotated-sorted-array/python.py").Solution()
        self.assertEqual(rotated.search([4,5,6,7,0,1,2], 0), 4)
        self.assertEqual(rotated.search([4,5,6,7,0,1,2], 3), -1)
        permutations = load("0046-permutations/python.py").Solution().permute([1,2,3])
        self.assertEqual(sorted(permutations), sorted([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]))
        self.assertEqual(load("0053-maximum-subarray/python.py").Solution().maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)
        self.assertEqual(load("0056-merge-intervals/python.py").Solution().merge([[1,3],[2,6],[8,10],[15,18]]), [[1,6],[8,10],[15,18]])
        self.assertTrue(load("0125-valid-palindrome/python.py").Solution().isPalindrome("A man, a plan, a canal: Panama"))
        self.assertEqual(load("0136-single-number/python.py").Solution().singleNumber([4,1,2,1,2]), 4)
        self.assertEqual(load("0169-majority-element/python.py").Solution().majorityElement([2,2,1,1,1,2,2]), 2)

    def test_new_dynamic_programming_and_graph_problems(self):
        self.assertEqual(load("0070-climbing-stairs/python.py").Solution().climbStairs(5), 8)
        word_break = load("0139-word-break/python.py").Solution()
        self.assertTrue(word_break.wordBreak("leetcode", ["leet", "code"]))
        self.assertFalse(word_break.wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
        courses = load("0207-course-schedule/python.py").Solution()
        self.assertTrue(courses.canFinish(2, [[1,0]]))
        self.assertFalse(courses.canFinish(2, [[1,0],[0,1]]))
        self.assertEqual(load("0239-sliding-window-maximum/python.py").Solution().maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7])
        self.assertEqual(load("0300-longest-increasing-subsequence/python.py").Solution().lengthOfLIS([10,9,2,5,3,7,101,18]), 4)
        self.assertEqual(sorted(load("0347-top-k-frequent-elements/python.py").Solution().topKFrequent([1,1,1,2,2,3], 2)), [1,2])
        self.assertEqual(load("0733-flood-fill/python.py").Solution().floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2), [[2,2,2],[2,2,0],[2,0,1]])

    def test_new_linked_list_problems(self):
        def values(head):
            result = []
            while head:
                result.append(head.val)
                head = head.next
            return result

        module = load("0021-merge-two-sorted-lists/python.py")
        module.ListNode = ListNode
        merged = module.Solution().mergeTwoLists(ListNode(1, ListNode(2, ListNode(4))), ListNode(1, ListNode(3, ListNode(4))))
        self.assertEqual(values(merged), [1,1,2,3,4,4])
        module = load("0023-merge-k-sorted-lists/python.py")
        module.ListNode = ListNode
        merged = module.Solution().mergeKLists([ListNode(1, ListNode(4)), ListNode(1, ListNode(3)), ListNode(2)])
        self.assertEqual(values(merged), [1,1,2,3,4])

    def test_new_tree_problems(self):
        valid_bst = load("0098-validate-binary-search-tree/python.py").Solution()
        self.assertTrue(valid_bst.isValidBST(TreeNode(2, TreeNode(1), TreeNode(3))))
        self.assertFalse(valid_bst.isValidBST(TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6)))))
        same = load("0100-same-tree/python.py").Solution()
        self.assertTrue(same.isSameTree(TreeNode(1, TreeNode(2)), TreeNode(1, TreeNode(2))))
        self.assertFalse(same.isSameTree(TreeNode(1, TreeNode(2)), TreeNode(1, None, TreeNode(2))))
        root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
        self.assertEqual(load("0102-binary-tree-level-order-traversal/python.py").Solution().levelOrder(root), [[3],[9,20],[15,7]])


if __name__ == "__main__":
    unittest.main()
