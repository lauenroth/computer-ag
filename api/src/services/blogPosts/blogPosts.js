import { db } from 'src/lib/db';

export const blogPosts = () => {
  return db.blogPost.findMany();
};

export const postBySlug = ({ slug }) => {
  return db.blogPost.findUnique({
    where: { slug },
  });
};
