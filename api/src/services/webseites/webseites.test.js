import { webseites } from './webseites';

describe('webseites', () => {
  scenario('returns all webseites', async (scenario) => {
    const result = await webseites();

    expect(result.length).toEqual(Object.keys(scenario.webseite).length);
  });
});
