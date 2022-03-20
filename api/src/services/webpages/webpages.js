import { db } from 'src/lib/db';

export const webpages = () => {
  return db.webpage.findMany();
};

export const webpage = ({ id }) => {
  return db.webpage.findUnique({
    where: { id },
  });
};

export const createWebpage = ({ input }) => {
  return db.webpage.create({
    data: input,
  });
};

export const updateWebpage = ({ id, input }) => {
  return db.webpage.update({
    data: input,
    where: { id },
  });
};

export const deleteWebpage = ({ id }) => {
  return db.webpage.delete({
    where: { id },
  });
};
