import { getAllPosts } from '../data/posts.js';
import { getAllProjects } from '../data/projects.js';

const SITE = 'https://lukeshort.dev';

/** @returns {Promise<string[]>} */
export async function getDynamicPages() {
    const posts = getAllPosts(); // returns array of blog posts with slugs
    const projects = getAllProjects(); // returns array of projects with slugs

    const pages = [];

    for (const post of posts) {
        pages.push(`${SITE}/blog/${post.slug}`);
    }

    for (const project of projects) {
        pages.push(`${SITE}/projects/${project.slug}`);
    }

    return pages;
}
