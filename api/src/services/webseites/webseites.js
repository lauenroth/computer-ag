import { db } from 'src/lib/db';

export const webseites = () => {
  return db.webseite.findMany();
};

export const webseite = ({ id }) => {
  return db.webseite.findUnique({
    where: { id },
  });
};

export const createWebseite = ({ input }) => {
  return db.webseite.create({
    data: input,
  });
};

export const updateWebseite = ({ id, input }) => {
  return db.webseite.update({
    data: input,
    where: { id },
  });
};

export const deleteWebseite = ({ id }) => {
  return db.webseite.delete({
    where: { id },
  });
};
