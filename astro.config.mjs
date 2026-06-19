import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://asgoshawk.github.io',
  base: '/leetcode-handbook',
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
        { label: '題解', autogenerate: { directory: 'problems' } },
        { label: '其他模式', items: [
          { label: '學習路線簡報', link: '/slides/learning-path/' },
        ] },
      ],
    }),
  ],
});
