---
title: 如何新增題解
description: 題解格式、資料查證與臺灣用語檢查清單。
---

## 必要內容

新增題解時，複製既有頁面的結構，補齊題目 metadata、核心觀念、正確性、複雜度、三語原始碼、測試及參考資料。

## 資料來源準則

1. 演算法定義優先查正式教材、原始論文或大學公開課程。
2. 語言行為查 MDN、Python 或 Rust 官方文件。
3. 每項來源都要註明它支援的觀念，不能只在文末堆放連結。
4. 若兩份來源的術語或前提不同，正文必須交代差異。

## 臺灣用語

使用臺灣通行的繁體中文；例如「最佳化、影片、品質、程式碼、陣列、雜湊、記憶體、執行緒」。若沒有自然的譯名，直接保留英文專有名詞。

送出變更前執行：

```sh
corepack pnpm lint:language
corepack pnpm test:solutions
corepack pnpm check
corepack pnpm build
```

## Commit

Commit message 使用單行英文 Conventional Commit，例如：

```text
docs: explain binary search invariants
```
