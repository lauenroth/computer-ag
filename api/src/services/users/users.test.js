import { users, user, createUser, updateUser, deleteUser } from './users';

describe('users', () => {
  scenario('returns all users', async (scenario) => {
    const result = await users();

    expect(result.length).toEqual(Object.keys(scenario.user).length);
  });

  scenario('returns a single user', async (scenario) => {
    const result = await user({ id: scenario.user.one.id });

    expect(result).toEqual(scenario.user.one);
  });

  scenario('creates a user', async () => {
    const result = await createUser({
      input: { name: 'String4675222', password: 'String', salt: 'String' },
    });

    expect(result.name).toEqual('String4675222');
    expect(result.password).toEqual('String');
    expect(result.salt).toEqual('String');
  });

  scenario('updates a user', async (scenario) => {
    const original = await user({ id: scenario.user.one.id });
    const result = await updateUser({
      id: original.id,
      input: { name: 'String72772262' },
    });

    expect(result.name).toEqual('String72772262');
  });

  scenario('deletes a user', async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id });
    const result = await user({ id: original.id });

    expect(result).toEqual(null);
  });
});
