import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const roots = ['README.md', 'src/content/docs', 'src/content/i18n'];
if (process.argv.includes('--generated')) roots.push('dist');
const extensions = new Set(['.md', '.mdx']);
const forbidden = new Map([
  ['優化', '最佳化'], ['視頻', '影片'], ['質量', '品質'], ['信息', '資訊'],
  ['軟件', '軟體'], ['硬件', '硬體'], ['代碼', '程式碼'], ['數組', '陣列'],
  ['鏈表', '鏈結串列'], ['棧', '堆疊'], ['隊列', '佇列'], ['哈希', '雜湊'],
  ['緩存', '快取'], ['內存', '記憶體'], ['線程', '執行緒'], ['進程', '行程'],
  ['對象', '物件'], ['接口', '介面'], ['組件', '元件'], ['默認', '預設'],
  ['用戶', '使用者'], ['加載', '載入'], ['構建', '建置'], ['鼠標', '滑鼠'],
  ['屏幕', '螢幕'], ['兼容', '相容'], ['鏈接', '連結'], ['源碼', '原始碼'],
  ['页', '頁'], ['编辑', '編輯'], ['搜索', '搜尋'], ['内容', '內容'],
  ['选择', '選擇'], ['语言', '語言'], ['菜单', '選單'], ['主题', '佈景主題'],
  ['自动', '自動'], ['浅色', '淺色'], ['目录', '目錄'], ['复制', '複製'],
]);

async function collect(path) {
  const info = await stat(path);
  if (info.isFile()) {
    return extensions.has(extname(path)) || ['.json', '.html'].includes(extname(path)) || path.endsWith('README.md')
      ? [path]
      : [];
  }
  return (await Promise.all((await readdir(path, { withFileTypes: true })).map((entry) =>
    collect(join(path, entry.name))))).flat();
}

let failed = false;
for (const file of (await Promise.all(roots.map(collect))).flat()) {
  const lines = (await readFile(file, 'utf8')).split('\n');
  lines.forEach((line, index) => {
    for (const [word, replacement] of forbidden) {
      if (line.includes(word)) {
        console.error(`${file}:${index + 1}: avoid “${word}”; use “${replacement}”`);
        failed = true;
      }
    }
  });
}
if (failed) process.exit(1);
console.log('Taiwan terminology check passed.');
