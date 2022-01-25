import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db';

export const profiles = () => {
  return db.profile.findMany();
};

export const Profile = {
  user: (_obj, { root }) =>
    db.profile.findUnique({ where: { id: root.id } }).user(),
};
