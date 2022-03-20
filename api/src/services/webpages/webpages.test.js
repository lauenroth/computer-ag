import {
  webpages,
  webpage,
  createWebpage,
  updateWebpage,
  deleteWebpage,
} from './webpages';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('webpages', () => {
  scenario('returns all webpages', async (scenario) => {
    const result = await webpages();

    expect(result.length).toEqual(Object.keys(scenario.webpage).length);
  });

  scenario('returns a single webpage', async (scenario) => {
    const result = await webpage({ id: scenario.webpage.one.id });

    expect(result).toEqual(scenario.webpage.one);
  });

  scenario('creates a webpage', async () => {
    const result = await createWebpage({
      input: { name: 'String', slug: 'String111144', html: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.slug).toEqual('String111144');
    expect(result.html).toEqual('String');
  });

  scenario('updates a webpage', async (scenario) => {
    const original = await webpage({ id: scenario.webpage.one.id });
    const result = await updateWebpage({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a webpage', async (scenario) => {
    const original = await deleteWebpage({ id: scenario.webpage.one.id });
    const result = await webpage({ id: original.id });

    expect(result).toEqual(null);
  });
});
