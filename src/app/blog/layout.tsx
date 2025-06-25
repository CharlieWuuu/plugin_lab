import Link from 'next/link';
import { getAllPostSlugs } from '@/lib/posts';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
    const slugs = await getAllPostSlugs();

    return (
        <div className="flex m-auto flex-grow max-w-[90%] overflow-hidden">
            <aside className="w-[200px] border-r border-gray-200 flex flex-col py-4 gap-2">
                {slugs.map((slug) => (
                    <Link key={slug} href={`/blog/${slug}`} className="text-nowrap pr-4">
                        {slug}
                    </Link>
                ))}
            </aside>
            <main className="w-[1000px] flex-grow p-4 overflow-y-auto">{children}</main>
        </div>
    );
}
