import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Params = {
    params: {
        slug: string;
    };
};

export default async function BlogPostPage(props: Params) {
    const { slug } = await props.params;
    const post = await getPostBySlug(slug);

    let Component = null;

    try {
        const mod = await import(`@/components/blog/${slug}`);
        Component = mod.default;
    } catch (err: any) {
        if (!err.message.includes('Cannot find module')) throw err;
        Component = null;
    }

    return (
        <article>
            <h1>{post.data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            {Component && (
                <>
                    <p>示範區</p>
                    <Component />
                </>
            )}
        </article>
    );
}
