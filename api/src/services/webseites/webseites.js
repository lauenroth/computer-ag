import { db } from 'src/lib/db';

export const webseiten = () => {
  return db.webseite.findMany();
};
