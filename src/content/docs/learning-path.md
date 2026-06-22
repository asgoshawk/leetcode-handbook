---
title: 學習路線
description: 從分析問題到間隔複習的可重複流程。
---

## 每題的四個階段

1. **理解**：寫下輸入、輸出、資料規模與邊界案例。
2. **設計**：先描述暴力解，再找出重複工作與適合的資料結構。
3. **驗證**：用不變量說明正確性，再分析時間與額外空間。
4. **複習**：隔天不看答案重寫，一週後再用另一種語言完成。

## 首版順序

| 順序 | 題目 | 核心模式 |
| --- | --- | --- |
| 1 | Two Sum | 用空間換時間、雜湊查找 |
| 2 | Valid Parentheses | 後進先出、局部配對 |
| 3 | Binary Search | 搜尋區間、不變量 |
| 4 | Reverse Linked List | 指標更新順序 |
| 5 | Maximum Depth of Binary Tree | 遞迴定義、深度優先搜尋 |
| 6 | Longest Substring Without Repeating Characters | 滑動視窗、雜湊表 |
| 7 | House Robber | 動態規劃、狀態壓縮 |
| 8 | Trapping Rain Water | 雙指標、不變量 |
| 9 | Best Time to Buy and Sell Stock | 前綴最佳值、單次走訪 |
| 10 | Contains Duplicate | 集合、提早結束 |
| 11 | Invert Binary Tree | 遞迴、樹的轉換 |
| 12 | Valid Anagram | 字元頻率、多重集合 |
| 13 | 3Sum | 排序、雙指標、去除重複項 |
| 14 | Group Anagrams | 標準化簽章、分組 |
| 15 | Number of Islands | 圖走訪、connected component |
| 16 | Product of Array Except Self | prefix product、suffix product |
| 17 | Coin Change | 動態規劃、最小化 |
| 18 | Minimum Window Substring | 滑動視窗、頻率限制 |
| 19 | Merge Two Sorted Lists | 鏈結串列合併、虛擬頭節點 |
| 20 | Climbing Stairs | 動態規劃、狀態壓縮 |
| 21 | Same Tree | 同步遞迴、結構比較 |
| 22 | Valid Palindrome | 雙指標、字元正規化 |
| 23 | Single Number | bitwise XOR、常數空間 |
| 24 | Majority Element | Boyer–Moore vote、配對消去 |
| 25 | Flood Fill | connected component、深度優先搜尋 |
| 26 | Container With Most Water | 雙指標、greedy 排除 |
| 27 | Search in Rotated Sorted Array | 二元搜尋、有序半側 |
| 28 | Permutations | backtracking、狀態還原 |
| 29 | Maximum Subarray | Kadane algorithm、局部最佳值 |
| 30 | Merge Intervals | 排序、區間合併 |
| 31 | Validate Binary Search Tree | 祖先界線、深度優先搜尋 |
| 32 | Binary Tree Level Order Traversal | 佇列、廣度優先搜尋 |
| 33 | Word Break | 可達前綴、動態規劃 |
| 34 | Course Schedule | topological sort、indegree |
| 35 | Longest Increasing Subsequence | 最小結尾、lower bound |
| 36 | Top K Frequent Elements | 頻率統計、bucket sort |
| 37 | Merge k Sorted Lists | divide and conquer、排序合併 |
| 38 | Sliding Window Maximum | monotonic queue、候選淘汰 |

## 三種語言的練習方式

- 第一輪用最熟悉的語言建立演算法。
- 第二輪只看虛擬碼，以另一種語言重寫。
- 第三輪比較標準函式庫、所有權、型別與錯誤處理；不要把語言差異誤認為演算法差異。
