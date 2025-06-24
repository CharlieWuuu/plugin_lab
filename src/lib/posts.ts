import fs from 'fs'; // 讀取檔案
import path from 'path'; // 路徑
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Markdown } from '../types/markdown';

const postsDirectory = path.join(process.cwd(), '/src/content/posts');

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`); // 完整路徑
    const fileContents = fs.readFileSync(fullPath, 'utf8'); // 轉 utf8

    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    const post = { data, contentHtml } as Markdown; // 組成一個物件
    return post;
}

export function getAllPostSlugs() {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => filename.replace(/\.md$/, ''));
}
