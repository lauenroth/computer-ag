import {
  webseites,
  webseite,
  createWebseite,
  updateWebseite,
  deleteWebseite,
} from './webseites';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('webseites', () => {
  scenario('returns all webseites', async (scenario) => {
    const result = await webseites();

    expect(result.length).toEqual(Object.keys(scenario.webseite).length);
  });

  scenario('returns a single webseite', async (scenario) => {
    const result = await webseite({ id: scenario.webseite.one.id });

    expect(result).toEqual(scenario.webseite.one);
  });

  scenario('creates a webseite', async () => {
    const result = await createWebseite({
      input: { name: 'String', slug: 'String6151428', html: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.slug).toEqual('String6151428');
    expect(result.html).toEqual('String');
  });

  scenario('updates a webseite', async (scenario) => {
    const original = await webseite({ id: scenario.webseite.one.id });
    const result = await updateWebseite({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a webseite', async (scenario) => {
    const original = await deleteWebseite({ id: scenario.webseite.one.id });
    const result = await webseite({ id: original.id });

    expect(result).toEqual(null);
  });
});
