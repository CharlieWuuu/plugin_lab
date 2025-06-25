import { getPostBySlug } from '@/lib/posts';
import 'github-markdown-css/github-markdown.css'; // 引入 GitHub Markdown CSS

export default async function GithubMarkdownCss() {
    const post = await getPostBySlug('github-markdown-css');
    return (
        <div>
            <div className="markdown-body">
                <i>這是一段套上 github-markdown-css 的文字</i>
                <h1>這是 H1</h1>
                <h2>這是 H2</h2>
                <p>
                    接下來有一段文字，文字中會有一些 <code>code</code> 穿插在其中。
                </p>
                <ul>
                    <li>也有一些點列事項</li>
                    <li>也有一些點列事項</li>
                    <li>也有一些點列事項</li>
                </ul>
            </div>
        </div>
    );
}
