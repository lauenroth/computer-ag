import { db } from 'src/lib/db';

export const anmeldungen = () => {
  return db.anmeldung.findMany();
};

export const anmeldung = ({ id }) => {
  return db.anmeldung.findUnique({
    where: { id },
  });
};

export const createAnmeldung = ({ input }) => {
  return db.anmeldung.create({
    data: input,
  });
};

export const updateAnmeldung = ({ id, input }) => {
  return db.anmeldung.update({
    data: input,
    where: { id },
  });
};

export const deleteAnmeldung = ({ id }) => {
  return db.anmeldung.delete({
    where: { id },
  });
};
