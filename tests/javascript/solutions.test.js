import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import vm from 'node:vm';

async function load(path, name) {
  const context = vm.createContext({ Map, Math });
  vm.runInContext(await readFile(new URL(`../../solutions/${path}`, import.meta.url), 'utf8'), context);
  return context[name];
}

test('Two Sum handles ordinary and duplicate values', async () => {
  const twoSum = await load('0001-two-sum/javascript.js', 'twoSum');
  assert.deepEqual([...twoSum([2, 7, 11, 15], 9)], [0, 1]);
  assert.deepEqual([...twoSum([3, 3], 6)], [0, 1]);
});

test('Valid Parentheses checks nesting and leftovers', async () => {
  const isValid = await load('0020-valid-parentheses/javascript.js', 'isValid');
  assert.equal(isValid('()[]{}'), true);
  assert.equal(isValid('([)]'), false);
  assert.equal(isValid('('), false);
});

test('Binary Search handles hits, misses, and empty arrays', async () => {
  const search = await load('0704-binary-search/javascript.js', 'search');
  assert.equal(search([-1, 0, 3, 5, 9, 12], 9), 4);
  assert.equal(search([-1, 0, 3, 5, 9, 12], 2), -1);
  assert.equal(search([], 1), -1);
});

test('Reverse Linked List handles a chain and null', async () => {
  const reverseList = await load('0206-reverse-linked-list/javascript.js', 'reverseList');
  const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
  const reversed = reverseList(head);
  assert.deepEqual([reversed.val, reversed.next.val, reversed.next.next.val], [3, 2, 1]);
  assert.equal(reverseList(null), null);
});

test('Maximum Depth handles empty and skewed trees', async () => {
  const maxDepth = await load('0104-maximum-depth-of-binary-tree/javascript.js', 'maxDepth');
  assert.equal(maxDepth(null), 0);
  assert.equal(maxDepth({ left: { left: null, right: null }, right: null }), 2);
});

test('Longest Substring handles repeated and empty strings', async () => {
  const lengthOfLongestSubstring = await load(
    '0003-longest-substring-without-repeating-characters/javascript.js',
    'lengthOfLongestSubstring',
  );
  assert.equal(lengthOfLongestSubstring('abcabcbb'), 3);
  assert.equal(lengthOfLongestSubstring('abba'), 2);
  assert.equal(lengthOfLongestSubstring(''), 0);
});

test('House Robber chooses the best non-adjacent values', async () => {
  const rob = await load('0198-house-robber/javascript.js', 'rob');
  assert.equal(rob([1, 2, 3, 1]), 4);
  assert.equal(rob([2, 7, 9, 3, 1]), 12);
  assert.equal(rob([]), 0);
});

test('Trapping Rain Water handles valleys and short inputs', async () => {
  const trap = await load('0042-trapping-rain-water/javascript.js', 'trap');
  assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
  assert.equal(trap([4, 2, 0, 3, 2, 5]), 9);
  assert.equal(trap([]), 0);
});

test('3Sum finds unique triplets', async () => {
  const threeSum = await load('0015-3sum/javascript.js', 'threeSum');
  assert.deepEqual(JSON.parse(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4]))), [[-1, -1, 2], [-1, 0, 1]]);
  assert.deepEqual(JSON.parse(JSON.stringify(threeSum([0, 0, 0]))), [[0, 0, 0]]);
});

test('Group Anagrams groups by character multiset', async () => {
  const groupAnagrams = await load('0049-group-anagrams/javascript.js', 'groupAnagrams');
  const groups = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
    .map((group) => [...group].sort().join(','))
    .sort();
  assert.deepEqual(JSON.parse(JSON.stringify(groups)), ['ate,eat,tea', 'bat', 'nat,tan']);
});

test('Minimum Window handles multiplicity and missing windows', async () => {
  const minWindow = await load('0076-minimum-window-substring/javascript.js', 'minWindow');
  assert.equal(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
  assert.equal(minWindow('a', 'aa'), '');
});

test('Best Time to Buy and Sell Stock keeps transaction order', async () => {
  const maxProfit = await load('0121-best-time-to-buy-and-sell-stock/javascript.js', 'maxProfit');
  assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
});

test('Number of Islands counts four-directional components', async () => {
  const numIslands = await load('0200-number-of-islands/javascript.js', 'numIslands');
  assert.equal(numIslands([['1', '1', '0'], ['1', '0', '0'], ['0', '0', '1']]), 2);
});

test('Contains Duplicate distinguishes unique arrays', async () => {
  const containsDuplicate = await load('0217-contains-duplicate/javascript.js', 'containsDuplicate');
  assert.equal(containsDuplicate([1, 2, 3, 1]), true);
  assert.equal(containsDuplicate([1, 2, 3, 4]), false);
});

test('Invert Binary Tree swaps every subtree', async () => {
  const invertTree = await load('0226-invert-binary-tree/javascript.js', 'invertTree');
  const root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };
  const inverted = invertTree(root);
  assert.deepEqual([inverted.val, inverted.left.val, inverted.right.val], [2, 3, 1]);
  assert.equal(invertTree(null), null);
});

test('Product Except Self handles zero values', async () => {
  const productExceptSelf = await load('0238-product-of-array-except-self/javascript.js', 'productExceptSelf');
  assert.deepEqual(JSON.parse(JSON.stringify(productExceptSelf([1, 2, 3, 4]))), [24, 12, 8, 6]);
  assert.deepEqual(JSON.parse(JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3]))), [0, 0, 9, 0, 0]);
});

test('Valid Anagram compares character frequencies', async () => {
  const isAnagram = await load('0242-valid-anagram/javascript.js', 'isAnagram');
  assert.equal(isAnagram('anagram', 'nagaram'), true);
  assert.equal(isAnagram('rat', 'car'), false);
});

test('Coin Change finds the minimum or reports impossibility', async () => {
  const coinChange = await load('0322-coin-change/javascript.js', 'coinChange');
  assert.equal(coinChange([1, 2, 5], 11), 3);
  assert.equal(coinChange([2], 3), -1);
  assert.equal(coinChange([1], 0), 0);
});

const plain = (value) => JSON.parse(JSON.stringify(value));
const list = (values) => values.reduceRight((next, val) => ({ val, next }), null);
const listValues = (head) => {
  const values = [];
  while (head) { values.push(head.val); head = head.next; }
  return values;
};

test('Container With Most Water finds the largest area', async () => {
  const maxArea = await load('0011-container-with-most-water/javascript.js', 'maxArea');
  assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
});

test('Merge Two Sorted Lists reuses sorted nodes', async () => {
  const mergeTwoLists = await load('0021-merge-two-sorted-lists/javascript.js', 'mergeTwoLists');
  assert.deepEqual(listValues(mergeTwoLists(list([1, 2, 4]), list([1, 3, 4]))), [1, 1, 2, 3, 4, 4]);
});

test('Merge k Sorted Lists handles several and empty lists', async () => {
  const mergeKLists = await load('0023-merge-k-sorted-lists/javascript.js', 'mergeKLists');
  assert.deepEqual(listValues(mergeKLists([list([1, 4, 5]), list([1, 3, 4]), list([2, 6])])), [1, 1, 2, 3, 4, 4, 5, 6]);
  assert.equal(mergeKLists([]), null);
});

test('Rotated Search handles both sorted halves', async () => {
  const search = await load('0033-search-in-rotated-sorted-array/javascript.js', 'search');
  assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
  assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
});

test('Permutations generates every arrangement', async () => {
  const permute = await load('0046-permutations/javascript.js', 'permute');
  assert.deepEqual(plain(permute([1, 2, 3])).map((x) => x.join('')).sort(), ['123', '132', '213', '231', '312', '321']);
});

test('Maximum Subarray handles mixed and negative values', async () => {
  const maxSubArray = await load('0053-maximum-subarray/javascript.js', 'maxSubArray');
  assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  assert.equal(maxSubArray([-1]), -1);
});

test('Merge Intervals combines overlaps and touching endpoints', async () => {
  const merge = await load('0056-merge-intervals/javascript.js', 'merge');
  assert.deepEqual(plain(merge([[1, 3], [2, 6], [8, 10], [15, 18]])), [[1, 6], [8, 10], [15, 18]]);
  assert.deepEqual(plain(merge([[1, 4], [4, 5]])), [[1, 5]]);
});

test('Climbing Stairs counts valid step sequences', async () => {
  const climbStairs = await load('0070-climbing-stairs/javascript.js', 'climbStairs');
  assert.equal(climbStairs(2), 2);
  assert.equal(climbStairs(5), 8);
});

test('Validate BST enforces ancestor bounds', async () => {
  const isValidBST = await load('0098-validate-binary-search-tree/javascript.js', 'isValidBST');
  assert.equal(isValidBST({ val: 2, left: { val: 1 }, right: { val: 3 } }), true);
  assert.equal(isValidBST({ val: 5, left: { val: 1 }, right: { val: 4, left: { val: 3 }, right: { val: 6 } } }), false);
});

test('Same Tree compares values and shape', async () => {
  const isSameTree = await load('0100-same-tree/javascript.js', 'isSameTree');
  assert.equal(isSameTree({ val: 1, left: { val: 2 }, right: null }, { val: 1, left: { val: 2 }, right: null }), true);
  assert.equal(isSameTree({ val: 1, left: { val: 2 } }, { val: 1, right: { val: 2 } }), false);
});

test('Level Order groups nodes by depth', async () => {
  const levelOrder = await load('0102-binary-tree-level-order-traversal/javascript.js', 'levelOrder');
  const root = { val: 3, left: { val: 9 }, right: { val: 20, left: { val: 15 }, right: { val: 7 } } };
  assert.deepEqual(plain(levelOrder(root)), [[3], [9, 20], [15, 7]]);
  assert.deepEqual(plain(levelOrder(null)), []);
});

test('Valid Palindrome ignores punctuation and case', async () => {
  const isPalindrome = await load('0125-valid-palindrome/javascript.js', 'isPalindrome');
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.equal(isPalindrome('race a car'), false);
});

test('Single Number cancels paired values', async () => {
  const singleNumber = await load('0136-single-number/javascript.js', 'singleNumber');
  assert.equal(singleNumber([4, 1, 2, 1, 2]), 4);
});

test('Word Break identifies segmentable strings', async () => {
  const wordBreak = await load('0139-word-break/javascript.js', 'wordBreak');
  assert.equal(wordBreak('leetcode', ['leet', 'code']), true);
  assert.equal(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']), false);
});

test('Majority Element keeps the surviving candidate', async () => {
  const majorityElement = await load('0169-majority-element/javascript.js', 'majorityElement');
  assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
});

test('Course Schedule detects prerequisite cycles', async () => {
  const canFinish = await load('0207-course-schedule/javascript.js', 'canFinish');
  assert.equal(canFinish(2, [[1, 0]]), true);
  assert.equal(canFinish(2, [[1, 0], [0, 1]]), false);
});

test('Sliding Window Maximum reports each window', async () => {
  const maxSlidingWindow = await load('0239-sliding-window-maximum/javascript.js', 'maxSlidingWindow');
  assert.deepEqual(plain(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)), [3, 3, 5, 5, 6, 7]);
});

test('Longest Increasing Subsequence finds the best length', async () => {
  const lengthOfLIS = await load('0300-longest-increasing-subsequence/javascript.js', 'lengthOfLIS');
  assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
});

test('Top K Frequent Elements returns the most common values', async () => {
  const topKFrequent = await load('0347-top-k-frequent-elements/javascript.js', 'topKFrequent');
  assert.deepEqual(plain(topKFrequent([1, 1, 1, 2, 2, 3], 2)).sort(), [1, 2]);
});

test('Flood Fill recolors only the connected component', async () => {
  const floodFill = await load('0733-flood-fill/javascript.js', 'floodFill');
  assert.deepEqual(plain(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
});


test('Additional array and binary-search problems work', async () => {
  { const removeDuplicates = await load('0026-remove-duplicates-from-sorted-array/javascript.js', 'removeDuplicates'); const nums = [1,1,2]; assert.equal(removeDuplicates(nums), 2); assert.deepEqual(nums.slice(0,2), [1,2]); }
  { const searchInsert = await load('0035-search-insert-position/javascript.js', 'searchInsert'); assert.equal(searchInsert([1,3,5,6], 5), 2); assert.equal(searchInsert([1,3,5,6], 2), 1); }
  { const plusOne = await load('0066-plus-one/javascript.js', 'plusOne'); assert.deepEqual(plain(plusOne([1,2,3])), [1,2,4]); assert.deepEqual(plain(plusOne([9,9])), [1,0,0]); }
  { const generate = await load('0118-pascals-triangle/javascript.js', 'generate'); assert.deepEqual(plain(generate(5)), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]); }
  { const twoSum = await load('0167-two-sum-ii-input-array-is-sorted/javascript.js', 'twoSum'); assert.deepEqual(plain(twoSum([2,7,11,15], 9)), [1,2]); }
  { const hammingWeight = await load('0191-number-of-1-bits/javascript.js', 'hammingWeight'); assert.equal(hammingWeight(11), 3); assert.equal(hammingWeight(128), 1); }
  { const missingNumber = await load('0268-missing-number/javascript.js', 'missingNumber'); assert.equal(missingNumber([3,0,1]), 2); assert.equal(missingNumber([0,1]), 2); }
  { const moveZeroes = await load('0283-move-zeroes/javascript.js', 'moveZeroes'); assert.deepEqual(plain(moveZeroes([0,1,0,3,12])), [1,3,12,0,0]); }
});

test('Additional backtracking, matrix, and prefix problems work', async () => {
  { const longestPalindrome = await load('0005-longest-palindromic-substring/javascript.js', 'longestPalindrome'); assert.equal(longestPalindrome('cbbd'), 'bb'); assert.ok(['bab','aba'].includes(longestPalindrome('babad'))); }
  { const letterCombinations = await load('0017-letter-combinations-of-a-phone-number/javascript.js', 'letterCombinations'); assert.deepEqual(plain(letterCombinations('23')).sort(), ['ad','ae','af','bd','be','bf','cd','ce','cf']); assert.deepEqual(plain(letterCombinations('')), []); }
  { const combinationSum = await load('0039-combination-sum/javascript.js', 'combinationSum'); assert.deepEqual(plain(combinationSum([2,3,6,7], 7)).map(x => x.join(',')).sort(), ['2,2,3','7']); }
  { const spiralOrder = await load('0054-spiral-matrix/javascript.js', 'spiralOrder'); assert.deepEqual(plain(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])), [1,2,3,6,9,8,7,4,5]); }
  { const uniquePaths = await load('0062-unique-paths/javascript.js', 'uniquePaths'); assert.equal(uniquePaths(3, 7), 28); assert.equal(uniquePaths(3, 2), 3); }
  { const setZeroes = await load('0073-set-matrix-zeroes/javascript.js', 'setZeroes'); assert.deepEqual(plain(setZeroes([[1,1,1],[1,0,1],[1,1,1]])), [[1,0,1],[0,0,0],[1,0,1]]); }
  { const sortColors = await load('0075-sort-colors/javascript.js', 'sortColors'); assert.deepEqual(plain(sortColors([2,0,2,1,1,0])), [0,0,1,1,2,2]); }
  { const subsets = await load('0078-subsets/javascript.js', 'subsets'); assert.deepEqual(plain(subsets([1,2])).map(x => x.join(',')).sort(), ['', '1', '1,2', '2']); }
  { const subsetsWithDup = await load('0090-subsets-ii/javascript.js', 'subsetsWithDup'); assert.deepEqual(plain(subsetsWithDup([1,2,2])).map(x => x.join(',')).sort(), ['', '1', '1,2', '1,2,2', '2', '2,2']); }
  { const findMin = await load('0153-find-minimum-in-rotated-sorted-array/javascript.js', 'findMin'); assert.equal(findMin([3,4,5,1,2]), 1); assert.equal(findMin([11,13,15,17]), 11); }
  { const minSubArrayLen = await load('0209-minimum-size-subarray-sum/javascript.js', 'minSubArrayLen'); assert.equal(minSubArrayLen(7, [2,3,1,2,4,3]), 2); assert.equal(minSubArrayLen(100, [1,2,3]), 0); }
  { const subarraySum = await load('0560-subarray-sum-equals-k/javascript.js', 'subarraySum'); assert.equal(subarraySum([1,1,1], 2), 2); assert.equal(subarraySum([1,2,3], 3), 2); }
});


test('Additional easy and pointer problems work', async () => {
  { const longestCommonPrefix = await load('0014-longest-common-prefix/javascript.js', 'longestCommonPrefix'); assert.equal(longestCommonPrefix(['flower','flow','flight']), 'fl'); assert.equal(longestCommonPrefix(['dog','racecar','car']), ''); }
  { const removeNthFromEnd = await load('0019-remove-nth-node-from-end-of-list/javascript.js', 'removeNthFromEnd'); assert.deepEqual(listValues(removeNthFromEnd(list([1,2,3,4,5]), 2)), [1,2,3,5]); }
  { const generateParenthesis = await load('0022-generate-parentheses/javascript.js', 'generateParenthesis'); assert.deepEqual(plain(generateParenthesis(3)).sort(), ['((()))','(()())','(())()','()(())','()()()']); }
  { const removeElement = await load('0027-remove-element/javascript.js', 'removeElement'); const nums = [3,2,2,3]; assert.equal(removeElement(nums, 3), 2); assert.deepEqual(nums.slice(0,2).sort(), [2,2]); }
  { const searchRange = await load('0034-find-first-and-last-position-of-element-in-sorted-array/javascript.js', 'searchRange'); assert.deepEqual(plain(searchRange([5,7,7,8,8,10], 8)), [3,4]); assert.deepEqual(plain(searchRange([5,7,7,8,8,10], 6)), [-1,-1]); }
  { const combinationSum2 = await load('0040-combination-sum-ii/javascript.js', 'combinationSum2'); assert.deepEqual(plain(combinationSum2([10,1,2,7,6,1,5], 8)).map(x=>x.join(',')).sort(), ['1,1,6','1,2,5','1,7','2,6']); }
  { const canJump = await load('0055-jump-game/javascript.js', 'canJump'); assert.equal(canJump([2,3,1,1,4]), true); assert.equal(canJump([3,2,1,0,4]), false); }
  { const lengthOfLastWord = await load('0058-length-of-last-word/javascript.js', 'lengthOfLastWord'); assert.equal(lengthOfLastWord('Hello World'), 5); assert.equal(lengthOfLastWord('   fly me   to   the moon  '), 4); }
  { const exist = await load('0079-word-search/javascript.js', 'exist'); const board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]; assert.equal(exist(board.map(r=>[...r]), 'ABCCED'), true); assert.equal(exist(board.map(r=>[...r]), 'ABCB'), false); }
  { const merge = await load('0088-merge-sorted-array/javascript.js', 'merge'); const a = [1,2,3,0,0,0]; assert.deepEqual(plain(merge(a,3,[2,5,6],3)), [1,2,2,3,5,6]); }
});

test('Additional search, tree, and dynamic programming problems work', async () => {
  { const isSymmetric = await load('0101-symmetric-tree/javascript.js', 'isSymmetric'); const root = {val:1,left:{val:2,left:{val:3},right:{val:4}},right:{val:2,left:{val:4},right:{val:3}}}; assert.equal(isSymmetric(root), true); }
  { const isBalanced = await load('0110-balanced-binary-tree/javascript.js', 'isBalanced'); assert.equal(isBalanced({val:3,left:{val:9},right:{val:20,left:{val:15},right:{val:7}}}), true); assert.equal(isBalanced({val:1,left:{val:2,left:{val:3}}}), false); }
  { const longestConsecutive = await load('0128-longest-consecutive-sequence/javascript.js', 'longestConsecutive'); assert.equal(longestConsecutive([100,4,200,1,3,2]), 4); assert.equal(longestConsecutive([]), 0); }
  { const maxProduct = await load('0152-maximum-product-subarray/javascript.js', 'maxProduct'); assert.equal(maxProduct([2,3,-2,4]), 6); assert.equal(maxProduct([-2,0,-1]), 0); }
  { const isHappy = await load('0202-happy-number/javascript.js', 'isHappy'); assert.equal(isHappy(19), true); assert.equal(isHappy(2), false); }
  { const findKthLargest = await load('0215-kth-largest-element-in-an-array/javascript.js', 'findKthLargest'); assert.equal(findKthLargest([3,2,1,5,6,4], 2), 5); }
  { const kthSmallest = await load('0230-kth-smallest-element-in-a-bst/javascript.js', 'kthSmallest'); const root = {val:3,left:{val:1,right:{val:2}},right:{val:4}}; assert.equal(kthSmallest(root, 1), 1); }
  { const countBits = await load('0338-counting-bits/javascript.js', 'countBits'); assert.deepEqual(plain(countBits(5)), [0,1,1,2,1,2]); }
  { const decodeString = await load('0394-decode-string/javascript.js', 'decodeString'); assert.equal(decodeString('3[a2[c]]'), 'accaccacc'); assert.equal(decodeString('2[abc]3[cd]ef'), 'abcabccdcdcdef'); }
  { const canPartition = await load('0416-partition-equal-subset-sum/javascript.js', 'canPartition'); assert.equal(canPartition([1,5,11,5]), true); assert.equal(canPartition([1,2,3,5]), false); }
});


test('Additional linked-list, matrix, and tree problems work', async () => {
  { const swapPairs = await load('0024-swap-nodes-in-pairs/javascript.js', 'swapPairs'); assert.deepEqual(listValues(swapPairs(list([1,2,3,4]))), [2,1,4,3]); }
  { const isValidSudoku = await load('0036-valid-sudoku/javascript.js', 'isValidSudoku'); const board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]; assert.equal(isValidSudoku(board), true); }
  { const jump = await load('0045-jump-game-ii/javascript.js', 'jump'); assert.equal(jump([2,3,1,1,4]), 2); assert.equal(jump([2,3,0,1,4]), 2); }
  { const rotate = await load('0048-rotate-image/javascript.js', 'rotate'); const matrix = [[1,2,3],[4,5,6],[7,8,9]]; rotate(matrix); assert.deepEqual(matrix, [[7,4,1],[8,5,2],[9,6,3]]); }
  { const searchMatrix = await load('0074-search-a-2d-matrix/javascript.js', 'searchMatrix'); assert.equal(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3), true); assert.equal(searchMatrix([[1,3,5]], 2), false); }
  { const deleteDuplicates = await load('0083-remove-duplicates-from-sorted-list/javascript.js', 'deleteDuplicates'); assert.deepEqual(listValues(deleteDuplicates(list([1,1,2,3,3]))), [1,2,3]); }
  { const numDecodings = await load('0091-decode-ways/javascript.js', 'numDecodings'); assert.equal(numDecodings('226'), 3); assert.equal(numDecodings('06'), 0); }
  { const zigzagLevelOrder = await load('0103-binary-tree-zigzag-level-order-traversal/javascript.js', 'zigzagLevelOrder'); const root = {val:3,left:{val:9},right:{val:20,left:{val:15},right:{val:7}}}; assert.deepEqual(plain(zigzagLevelOrder(root)), [[3],[20,9],[15,7]]); }
  { const flatten = await load('0114-flatten-binary-tree-to-linked-list/javascript.js', 'flatten'); const root = {val:1,left:{val:2,left:{val:3},right:{val:4}},right:{val:5,right:{val:6}}}; flatten(root); const values = []; for (let node = root; node; node = node.right) { values.push(node.val); assert.equal(node.left ?? null, null); } assert.deepEqual(values, [1,2,3,4,5,6]); }
  { const rightSideView = await load('0199-binary-tree-right-side-view/javascript.js', 'rightSideView'); const root = {val:1,left:{val:2,right:{val:5}},right:{val:3,right:{val:4}}}; assert.deepEqual(plain(rightSideView(root)), [1,3,4]); }
});

test('Additional easy string, bit, and DP problems work', async () => {
  { const removeElements = await load('0203-remove-linked-list-elements/javascript.js', 'removeElements'); assert.deepEqual(listValues(removeElements(list([1,2,6,3,4,5,6]), 6)), [1,2,3,4,5]); }
  { const isPalindrome = await load('0234-palindrome-linked-list/javascript.js', 'isPalindrome'); assert.equal(isPalindrome(list([1,2,2,1])), true); assert.equal(isPalindrome(list([1,2])), false); }
  { const reverseBits = await load('0190-reverse-bits/javascript.js', 'reverseBits'); assert.equal(reverseBits(43261596), 964176192); }
  { const titleToNumber = await load('0171-excel-sheet-column-number/javascript.js', 'titleToNumber'); assert.equal(titleToNumber('A'), 1); assert.equal(titleToNumber('ZY'), 701); }
  { const numSquares = await load('0279-perfect-squares/javascript.js', 'numSquares'); assert.equal(numSquares(12), 3); assert.equal(numSquares(13), 2); }
  { const reverseString = await load('0344-reverse-string/javascript.js', 'reverseString'); const s = ['h','e','l','l','o']; reverseString(s); assert.deepEqual(s, ['o','l','l','e','h']); }
  { const canConstruct = await load('0383-ransom-note/javascript.js', 'canConstruct'); assert.equal(canConstruct('aa', 'aab'), true); assert.equal(canConstruct('aa', 'ab'), false); }
  { const firstUniqChar = await load('0387-first-unique-character-in-a-string/javascript.js', 'firstUniqChar'); assert.equal(firstUniqChar('leetcode'), 0); assert.equal(firstUniqChar('aabb'), -1); }
  { const isSubsequence = await load('0392-is-subsequence/javascript.js', 'isSubsequence'); assert.equal(isSubsequence('abc', 'ahbgdc'), true); assert.equal(isSubsequence('axc', 'ahbgdc'), false); }
  { const fib = await load('0509-fibonacci-number/javascript.js', 'fib'); assert.equal(fib(4), 3); assert.equal(fib(10), 55); }
});
