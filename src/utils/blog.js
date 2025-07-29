import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('./src/content/blog');

export async function getAllPosts() {
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

export async function getEntryBySlug(slug) {
  const fileContent = fs.readFileSync(path.join(postsDir, slug + '.md'), 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    ...data,
    body: content,
  };
}
