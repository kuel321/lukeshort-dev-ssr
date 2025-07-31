import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('./src/content/blog');

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);

  return files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContent = fs.readFileSync(path.join(postsDir, fileName), 'utf-8');
    const { data } = matter(fileContent);

    return {
      ...data,
      slug,
    };
  });
}

export function getEntryBySlug(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    ...data,
    body: content,
  };
}

export function getPostsForSitemap() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description || '',
    date: post.date,
  }));
}
