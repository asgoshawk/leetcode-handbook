# LeetCode 自學手冊

以臺灣繁體中文整理的資料結構與演算法手冊。每篇題解提供 JavaScript、Python、Rust 三種可提交至 LeetCode 的解答，並以正式教材、大學公開課程及語言官方文件查證觀念。

## 環境需求

- Node.js 20 以上
- Corepack
- Python 3.12 以上
- Rust stable

```sh
corepack enable
corepack pnpm install
corepack pnpm dev
```

本專案只使用 pnpm，不使用 npm 或 Yarn 安裝相依套件。

## 常用指令

```sh
corepack pnpm dev             # 啟動本機開發伺服器
corepack pnpm check           # 檢查 Astro 與臺灣用語
corepack pnpm build           # 建立正式網站
corepack pnpm test:solutions  # 執行三種語言測試
corepack pnpm test:e2e        # 執行桌面與手機瀏覽器測試
```

第一次執行瀏覽器測試前，需安裝 Chromium：

```sh
corepack pnpm exec playwright install chromium
```

## 新增題解

題解放在 `src/content/docs/problems`，三語原始碼放在 `solutions/<題號與名稱>`。頁面直接匯入原始碼，因此網站顯示內容和本機測試使用同一份實作。

內容須使用臺灣常用的繁體中文。若沒有自然的中文對應詞，保留英文專有名詞。完整規則請參閱網站中的「如何新增題解」。

## Commit message

使用單行英文 Conventional Commit：

```text
feat: add learning path presentation
docs: explain binary search invariants
fix: prevent mobile code overflow
```

## GitHub Pages

GitHub Free 必須使用公開 repository。將預設分支設為 `main`，並在 repository 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。推送至 `main` 後，workflow 會檢查並發佈網站。

正式網址：<https://asgoshawk.github.io/leetcode-handbook/>

## 聲明

本專案只供教育用途，與 LeetCode 沒有合作或隸屬關係。題目商標及原始內容屬其權利人所有。
