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
