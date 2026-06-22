import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: 'https://asgoshawk.github.io',
  base: '/leetcode-handbook',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: 'LeetCode 自學手冊',
      description: '以臺灣繁體中文整理的資料結構與演算法自學手冊',
      defaultLocale: 'root',
      locales: {
        root: { label: '繁體中文', lang: 'zh-TW' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/asgoshawk/leetcode-handbook' }],
      editLink: { baseUrl: 'https://github.com/asgoshawk/leetcode-handbook/edit/main/' },
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'script',
          content: "try{if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.dataset.theme='dark'}}catch(e){}",
        },
      ],
      sidebar: [
        { label: '開始使用', items: [
          { label: '手冊首頁', slug: 'index' },
          { label: '學習路線', slug: 'learning-path' },
          { label: '如何新增題解', slug: 'contributing' },
        ] },
        { label: '題解', items: [
          { label: '題目索引', slug: 'problems' },
          { label: 'Easy', items: [
            { label: '1. Two Sum', slug: 'problems/0001-two-sum' },
            { label: '20. Valid Parentheses', slug: 'problems/0020-valid-parentheses' },
            { label: '21. Merge Two Sorted Lists', slug: 'problems/0021-merge-two-sorted-lists' },
            { label: '70. Climbing Stairs', slug: 'problems/0070-climbing-stairs' },
            { label: '100. Same Tree', slug: 'problems/0100-same-tree' },
            { label: '104. Maximum Depth of Binary Tree', slug: 'problems/0104-maximum-depth-of-binary-tree' },
            { label: '121. Best Time to Buy and Sell Stock', slug: 'problems/0121-best-time-to-buy-and-sell-stock' },
            { label: '125. Valid Palindrome', slug: 'problems/0125-valid-palindrome' },
            { label: '136. Single Number', slug: 'problems/0136-single-number' },
            { label: '169. Majority Element', slug: 'problems/0169-majority-element' },
            { label: '206. Reverse Linked List', slug: 'problems/0206-reverse-linked-list' },
            { label: '217. Contains Duplicate', slug: 'problems/0217-contains-duplicate' },
            { label: '226. Invert Binary Tree', slug: 'problems/0226-invert-binary-tree' },
            { label: '242. Valid Anagram', slug: 'problems/0242-valid-anagram' },
            { label: '704. Binary Search', slug: 'problems/0704-binary-search' },
            { label: '733. Flood Fill', slug: 'problems/0733-flood-fill' },
          ] },
          { label: 'Medium', items: [
            { label: '3. Longest Substring Without Repeating Characters', slug: 'problems/0003-longest-substring-without-repeating-characters' },
            { label: '11. Container With Most Water', slug: 'problems/0011-container-with-most-water' },
            { label: '15. 3Sum', slug: 'problems/0015-3sum' },
            { label: '33. Search in Rotated Sorted Array', slug: 'problems/0033-search-in-rotated-sorted-array' },
            { label: '46. Permutations', slug: 'problems/0046-permutations' },
            { label: '49. Group Anagrams', slug: 'problems/0049-group-anagrams' },
            { label: '53. Maximum Subarray', slug: 'problems/0053-maximum-subarray' },
            { label: '56. Merge Intervals', slug: 'problems/0056-merge-intervals' },
            { label: '98. Validate Binary Search Tree', slug: 'problems/0098-validate-binary-search-tree' },
            { label: '102. Binary Tree Level Order Traversal', slug: 'problems/0102-binary-tree-level-order-traversal' },
            { label: '139. Word Break', slug: 'problems/0139-word-break' },
            { label: '198. House Robber', slug: 'problems/0198-house-robber' },
            { label: '200. Number of Islands', slug: 'problems/0200-number-of-islands' },
            { label: '207. Course Schedule', slug: 'problems/0207-course-schedule' },
            { label: '238. Product of Array Except Self', slug: 'problems/0238-product-of-array-except-self' },
            { label: '300. Longest Increasing Subsequence', slug: 'problems/0300-longest-increasing-subsequence' },
            { label: '322. Coin Change', slug: 'problems/0322-coin-change' },
            { label: '347. Top K Frequent Elements', slug: 'problems/0347-top-k-frequent-elements' },
          ] },
          { label: 'Hard', items: [
            { label: '23. Merge k Sorted Lists', slug: 'problems/0023-merge-k-sorted-lists' },
            { label: '42. Trapping Rain Water', slug: 'problems/0042-trapping-rain-water' },
            { label: '76. Minimum Window Substring', slug: 'problems/0076-minimum-window-substring' },
            { label: '239. Sliding Window Maximum', slug: 'problems/0239-sliding-window-maximum' },
          ] },
        ] },
      ],
    }),
  ],
});
