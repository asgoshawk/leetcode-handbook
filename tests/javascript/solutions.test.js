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
