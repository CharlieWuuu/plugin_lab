// === Node.js 原生模組 ===
import fs from 'fs'; // 讀取檔案用
import path from 'path'; // 處理路徑用

// === 第三方套件 ===
import matter from 'gray-matter'; // 解析 Markdown 檔案裡的 frontmatter（--- 區塊）
import { remark } from 'remark'; // Markdown parser 套件（支援 plugin 架構）
import html from 'remark-html'; // Remark 的 plugin，把 markdown 轉成 HTML

// === 自訂模組 ===
import { Markdown } from '../types/markdown'; // 自訂型別（自己定義的 `Markdown` interface）

// 定義 Markdown 檔案所在的資料夾（路徑：你的專案根目錄/src/content/posts）
const postsDirectory = path.join(process.cwd(), '/src/content/posts');

export async function getPostBySlug(slug: string) {
    // 根據 slug（檔名）組出完整路徑，例如 hello.md
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // 用 Node.js 讀取檔案內容，必須指定 'utf8' 才會拿到正確的文字，而不是 Buffer
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析 markdown，會拆成兩部分：
    // - data：frontmatter 中的 metadata（如 title、date）
    // - content：實際的 markdown 本文
    const { data, content } = matter(fileContents);

    // 用 remark 處理 markdown 內容，加上 remark-html plugin，轉成 VFile
    // VFile 是 remark 處理後的結果，包含了 HTML 字串和其他元資料
    const vFile = await remark().use(html).process(content);

    // 將轉換結果（VFile）轉成純 HTML 字串
    const contentHtml = vFile.toString();

    // 組合成文章物件，型別是你自定義的 Markdown
    const post = { data, contentHtml } as Markdown;
    return post;
}

export function getAllPostSlugs() {
    // 讀取整個 posts 資料夾裡的檔名，例如 ['hello.md', 'intro.md']
    const filenames = fs.readdirSync(postsDirectory);

    // 移除副檔名，轉換成 ['hello', 'intro']，作為 slug 傳回
    return filenames.map((filename) => filename.replace(/\.md$/, ''));
}
