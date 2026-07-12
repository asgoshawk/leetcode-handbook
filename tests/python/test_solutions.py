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

    def test_additional_twenty_problem_batch(self):
        nums = [1,1,2]
        self.assertEqual(load("0026-remove-duplicates-from-sorted-array/python.py").Solution().removeDuplicates(nums), 2)
        self.assertEqual(nums[:2], [1,2])
        s = load("0035-search-insert-position/python.py").Solution()
        self.assertEqual(s.searchInsert([1,3,5,6], 5), 2)
        self.assertEqual(s.searchInsert([1,3,5,6], 2), 1)
        s = load("0066-plus-one/python.py").Solution()
        self.assertEqual(s.plusOne([1,2,3]), [1,2,4])
        self.assertEqual(s.plusOne([9,9]), [1,0,0])
        self.assertEqual(load("0118-pascals-triangle/python.py").Solution().generate(5), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
        self.assertEqual(load("0167-two-sum-ii-input-array-is-sorted/python.py").Solution().twoSum([2,7,11,15], 9), [1,2])
        s = load("0191-number-of-1-bits/python.py").Solution()
        self.assertEqual(s.hammingWeight(11), 3)
        self.assertEqual(s.hammingWeight(128), 1)
        s = load("0268-missing-number/python.py").Solution()
        self.assertEqual(s.missingNumber([3,0,1]), 2)
        self.assertEqual(s.missingNumber([0,1]), 2)
        nums = [0,1,0,3,12]
        load("0283-move-zeroes/python.py").Solution().moveZeroes(nums)
        self.assertEqual(nums, [1,3,12,0,0])
        s = load("0005-longest-palindromic-substring/python.py").Solution()
        self.assertEqual(s.longestPalindrome("cbbd"), "bb")
        self.assertIn(s.longestPalindrome("babad"), ["bab", "aba"])
        s = load("0017-letter-combinations-of-a-phone-number/python.py").Solution()
        self.assertEqual(sorted(s.letterCombinations("23")), ['ad','ae','af','bd','be','bf','cd','ce','cf'])
        self.assertEqual(s.letterCombinations(""), [])
        got = load("0039-combination-sum/python.py").Solution().combinationSum([2,3,6,7], 7)
        self.assertEqual(sorted(','.join(map(str, x)) for x in got), ['2,2,3','7'])
        self.assertEqual(load("0054-spiral-matrix/python.py").Solution().spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5])
        s = load("0062-unique-paths/python.py").Solution()
        self.assertEqual(s.uniquePaths(3, 7), 28)
        self.assertEqual(s.uniquePaths(3, 2), 3)
        matrix = [[1,1,1],[1,0,1],[1,1,1]]
        load("0073-set-matrix-zeroes/python.py").Solution().setZeroes(matrix)
        self.assertEqual(matrix, [[1,0,1],[0,0,0],[1,0,1]])
        nums = [2,0,2,1,1,0]
        load("0075-sort-colors/python.py").Solution().sortColors(nums)
        self.assertEqual(nums, [0,0,1,1,2,2])
        got = load("0078-subsets/python.py").Solution().subsets([1,2])
        self.assertEqual(sorted(','.join(map(str, x)) for x in got), ['', '1', '1,2', '2'])
        got = load("0090-subsets-ii/python.py").Solution().subsetsWithDup([1,2,2])
        self.assertEqual(sorted(','.join(map(str, x)) for x in got), ['', '1', '1,2', '1,2,2', '2', '2,2'])
        s = load("0153-find-minimum-in-rotated-sorted-array/python.py").Solution()
        self.assertEqual(s.findMin([3,4,5,1,2]), 1)
        self.assertEqual(s.findMin([11,13,15,17]), 11)
        s = load("0209-minimum-size-subarray-sum/python.py").Solution()
        self.assertEqual(s.minSubArrayLen(7, [2,3,1,2,4,3]), 2)
        self.assertEqual(s.minSubArrayLen(100, [1,2,3]), 0)
        s = load("0560-subarray-sum-equals-k/python.py").Solution()
        self.assertEqual(s.subarraySum([1,1,1], 2), 2)
        self.assertEqual(s.subarraySum([1,2,3], 3), 2)

    def test_additional_fourth_twenty_problem_batch(self):
        def values(head):
            result = []
            while head:
                result.append(head.val)
                head = head.next
            return result
        s = load("0014-longest-common-prefix/python.py").Solution()
        self.assertEqual(s.longestCommonPrefix(['flower','flow','flight']), 'fl')
        self.assertEqual(s.longestCommonPrefix(['dog','racecar','car']), '')
        m = load("0019-remove-nth-node-from-end-of-list/python.py"); m.ListNode = ListNode
        self.assertEqual(values(m.Solution().removeNthFromEnd(ListNode(1,ListNode(2,ListNode(3,ListNode(4,ListNode(5))))), 2)), [1,2,3,5])
        self.assertEqual(sorted(load("0022-generate-parentheses/python.py").Solution().generateParenthesis(3)), ['((()))','(()())','(())()','()(())','()()()'])
        nums = [3,2,2,3]
        self.assertEqual(load("0027-remove-element/python.py").Solution().removeElement(nums, 3), 2)
        self.assertEqual(sorted(nums[:2]), [2,2])
        s = load("0034-find-first-and-last-position-of-element-in-sorted-array/python.py").Solution()
        self.assertEqual(s.searchRange([5,7,7,8,8,10], 8), [3,4])
        self.assertEqual(s.searchRange([5,7,7,8,8,10], 6), [-1,-1])
        got = load("0040-combination-sum-ii/python.py").Solution().combinationSum2([10,1,2,7,6,1,5], 8)
        self.assertEqual(sorted(','.join(map(str, x)) for x in got), ['1,1,6','1,2,5','1,7','2,6'])
        s = load("0055-jump-game/python.py").Solution()
        self.assertTrue(s.canJump([2,3,1,1,4]))
        self.assertFalse(s.canJump([3,2,1,0,4]))
        s = load("0058-length-of-last-word/python.py").Solution()
        self.assertEqual(s.lengthOfLastWord('Hello World'), 5)
        self.assertEqual(s.lengthOfLastWord('   fly me   to   the moon  '), 4)
        s = load("0079-word-search/python.py").Solution()
        board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]
        self.assertTrue(s.exist([row[:] for row in board], 'ABCCED'))
        self.assertFalse(s.exist([row[:] for row in board], 'ABCB'))
        nums = [1,2,3,0,0,0]
        load("0088-merge-sorted-array/python.py").Solution().merge(nums, 3, [2,5,6], 3)
        self.assertEqual(nums, [1,2,2,3,5,6])
        root = TreeNode(1, TreeNode(2, TreeNode(3), TreeNode(4)), TreeNode(2, TreeNode(4), TreeNode(3)))
        self.assertTrue(load("0101-symmetric-tree/python.py").Solution().isSymmetric(root))
        s = load("0110-balanced-binary-tree/python.py").Solution()
        self.assertTrue(s.isBalanced(TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))))
        self.assertFalse(s.isBalanced(TreeNode(1, TreeNode(2, TreeNode(3)))))
        s = load("0128-longest-consecutive-sequence/python.py").Solution()
        self.assertEqual(s.longestConsecutive([100,4,200,1,3,2]), 4)
        self.assertEqual(s.longestConsecutive([]), 0)
        s = load("0152-maximum-product-subarray/python.py").Solution()
        self.assertEqual(s.maxProduct([2,3,-2,4]), 6)
        self.assertEqual(s.maxProduct([-2,0,-1]), 0)
        s = load("0202-happy-number/python.py").Solution()
        self.assertTrue(s.isHappy(19))
        self.assertFalse(s.isHappy(2))
        self.assertEqual(load("0215-kth-largest-element-in-an-array/python.py").Solution().findKthLargest([3,2,1,5,6,4], 2), 5)
        root = TreeNode(3, TreeNode(1, None, TreeNode(2)), TreeNode(4))
        self.assertEqual(load("0230-kth-smallest-element-in-a-bst/python.py").Solution().kthSmallest(root, 1), 1)
        self.assertEqual(load("0338-counting-bits/python.py").Solution().countBits(5), [0,1,1,2,1,2])
        s = load("0394-decode-string/python.py").Solution()
        self.assertEqual(s.decodeString('3[a2[c]]'), 'accaccacc')
        self.assertEqual(s.decodeString('2[abc]3[cd]ef'), 'abcabccdcdcdef')
        s = load("0416-partition-equal-subset-sum/python.py").Solution()
        self.assertTrue(s.canPartition([1,5,11,5]))
        self.assertFalse(s.canPartition([1,2,3,5]))


    def test_additional_fifth_twenty_problem_batch(self):
        def values(head):
            result = []
            while head:
                result.append(head.val)
                head = head.next
            return result

        m = load("0024-swap-nodes-in-pairs/python.py"); m.ListNode = ListNode
        self.assertEqual(values(m.Solution().swapPairs(ListNode(1, ListNode(2, ListNode(3, ListNode(4)))))), [2,1,4,3])
        board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
        self.assertTrue(load("0036-valid-sudoku/python.py").Solution().isValidSudoku(board))
        self.assertEqual(load("0045-jump-game-ii/python.py").Solution().jump([2,3,1,1,4]), 2)
        matrix = [[1,2,3],[4,5,6],[7,8,9]]
        load("0048-rotate-image/python.py").Solution().rotate(matrix)
        self.assertEqual(matrix, [[7,4,1],[8,5,2],[9,6,3]])
        s = load("0074-search-a-2d-matrix/python.py").Solution()
        self.assertTrue(s.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
        self.assertFalse(s.searchMatrix([[1,3,5]], 2))
        m = load("0083-remove-duplicates-from-sorted-list/python.py")
        self.assertEqual(values(m.Solution().deleteDuplicates(ListNode(1, ListNode(1, ListNode(2, ListNode(3, ListNode(3))))))), [1,2,3])
        s = load("0091-decode-ways/python.py").Solution()
        self.assertEqual(s.numDecodings("226"), 3)
        self.assertEqual(s.numDecodings("06"), 0)
        root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
        self.assertEqual(load("0103-binary-tree-zigzag-level-order-traversal/python.py").Solution().zigzagLevelOrder(root), [[3],[20,9],[15,7]])
        root = TreeNode(1, TreeNode(2, TreeNode(3), TreeNode(4)), TreeNode(5, None, TreeNode(6)))
        load("0114-flatten-binary-tree-to-linked-list/python.py").Solution().flatten(root)
        flattened = []
        while root:
            flattened.append(root.val)
            self.assertIsNone(root.left)
            root = root.right
        self.assertEqual(flattened, [1,2,3,4,5,6])
        root = TreeNode(1, TreeNode(2, None, TreeNode(5)), TreeNode(3, None, TreeNode(4)))
        self.assertEqual(load("0199-binary-tree-right-side-view/python.py").Solution().rightSideView(root), [1,3,4])
        m = load("0203-remove-linked-list-elements/python.py"); m.ListNode = ListNode
        self.assertEqual(values(m.Solution().removeElements(ListNode(1,ListNode(2,ListNode(6,ListNode(3,ListNode(4,ListNode(5,ListNode(6))))))), 6)), [1,2,3,4,5])
        self.assertTrue(load("0234-palindrome-linked-list/python.py").Solution().isPalindrome(ListNode(1,ListNode(2,ListNode(2,ListNode(1))))))
        self.assertFalse(load("0234-palindrome-linked-list/python.py").Solution().isPalindrome(ListNode(1,ListNode(2))))
        self.assertEqual(load("0190-reverse-bits/python.py").Solution().reverseBits(43261596), 964176192)
        s = load("0171-excel-sheet-column-number/python.py").Solution()
        self.assertEqual(s.titleToNumber("A"), 1)
        self.assertEqual(s.titleToNumber("ZY"), 701)
        s = load("0279-perfect-squares/python.py").Solution()
        self.assertEqual(s.numSquares(12), 3)
        self.assertEqual(s.numSquares(13), 2)
        chars = ["h","e","l","l","o"]
        load("0344-reverse-string/python.py").Solution().reverseString(chars)
        self.assertEqual(chars, ["o","l","l","e","h"])
        s = load("0383-ransom-note/python.py").Solution()
        self.assertTrue(s.canConstruct("aa", "aab"))
        self.assertFalse(s.canConstruct("aa", "ab"))
        s = load("0387-first-unique-character-in-a-string/python.py").Solution()
        self.assertEqual(s.firstUniqChar("leetcode"), 0)
        self.assertEqual(s.firstUniqChar("aabb"), -1)
        s = load("0392-is-subsequence/python.py").Solution()
        self.assertTrue(s.isSubsequence("abc", "ahbgdc"))
        self.assertFalse(s.isSubsequence("axc", "ahbgdc"))
        s = load("0509-fibonacci-number/python.py").Solution()
        self.assertEqual(s.fib(4), 3)
        self.assertEqual(s.fib(10), 55)


if __name__ == "__main__":
    unittest.main()
