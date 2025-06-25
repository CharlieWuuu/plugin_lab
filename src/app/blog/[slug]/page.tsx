import { getPostBySlug } from '@/lib/posts';
import 'highlight.js/styles/github-dark.css';

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
        <article className="prose">
            <h1>{post.data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            {Component && (
                <>
                    <h2>示範區</h2>
                    <Component />
                </>
            )}
        </article>
    );
}
