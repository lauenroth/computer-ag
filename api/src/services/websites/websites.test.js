import { websites } from './websites';

describe('websites', () => {
  scenario('returns all websites', async (scenario) => {
    const result = await websites();

    expect(result.length).toEqual(Object.keys(scenario.website).length);
  });
});
