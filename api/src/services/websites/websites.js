import { db } from 'src/lib/db';

export const websites = () => {
  return db.website.findMany();
};

export const website = ({ id }) => {
  return db.website.findUnique({
    where: { id },
  });
};

export const websiteBySlug = ({ slug }) => {
  return db.website.findUnique({
    where: { slug },
  });
};

export const Website = {
  // User: (_obj, { root }) =>
  //   db.website.findUnique({ where: { userId: root.id } }).user(),
};
