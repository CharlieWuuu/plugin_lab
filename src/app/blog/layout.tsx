import Link from 'next/link';
import { getAllPostSlugs } from '@/lib/posts';
import 'github-markdown-css/github-markdown.css';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
    const slugs = await getAllPostSlugs();

    return (
        <div className="flex m-auto flex-grow max-w-[90%] overflow-hidden">
            <aside className="w-[200px] border-r border-gray-200 flex flex-col py-4">
                {slugs.map((slug) => (
                    <div key={slug}>
                        <Link href={`/blog/${slug}`}>{slug}</Link>
                    </div>
                ))}
            </aside>
            <main className="w-[1000px] flex-grow p-4 overflow-y-auto">{children}</main>
        </div>
    );
}
