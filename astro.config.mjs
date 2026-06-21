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
            { label: '104. Maximum Depth of Binary Tree', slug: 'problems/0104-maximum-depth-of-binary-tree' },
            { label: '121. Best Time to Buy and Sell Stock', slug: 'problems/0121-best-time-to-buy-and-sell-stock' },
            { label: '206. Reverse Linked List', slug: 'problems/0206-reverse-linked-list' },
            { label: '217. Contains Duplicate', slug: 'problems/0217-contains-duplicate' },
            { label: '226. Invert Binary Tree', slug: 'problems/0226-invert-binary-tree' },
            { label: '242. Valid Anagram', slug: 'problems/0242-valid-anagram' },
            { label: '704. Binary Search', slug: 'problems/0704-binary-search' },
          ] },
          { label: 'Medium', items: [
            { label: '3. Longest Substring Without Repeating Characters', slug: 'problems/0003-longest-substring-without-repeating-characters' },
            { label: '15. 3Sum', slug: 'problems/0015-3sum' },
            { label: '49. Group Anagrams', slug: 'problems/0049-group-anagrams' },
            { label: '198. House Robber', slug: 'problems/0198-house-robber' },
            { label: '200. Number of Islands', slug: 'problems/0200-number-of-islands' },
            { label: '238. Product of Array Except Self', slug: 'problems/0238-product-of-array-except-self' },
            { label: '322. Coin Change', slug: 'problems/0322-coin-change' },
          ] },
          { label: 'Hard', items: [
            { label: '42. Trapping Rain Water', slug: 'problems/0042-trapping-rain-water' },
            { label: '76. Minimum Window Substring', slug: 'problems/0076-minimum-window-substring' },
          ] },
        ] },
      ],
    }),
  ],
});
