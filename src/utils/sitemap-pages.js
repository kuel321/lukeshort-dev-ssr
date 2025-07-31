import { getPostsForSitemap } from '../utils/blog.js';

const SITE = 'https://lukeshort.dev'; // update this too!

/** @returns {string[]} */
export function getDynamicPages() {
    const posts = getPostsForSitemap();
    console.log('Generating dynamic pages for sitemap:', posts);
    return posts.map((post) => `${SITE}/blog/${post.slug}`);
}
