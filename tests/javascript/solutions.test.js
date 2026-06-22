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
