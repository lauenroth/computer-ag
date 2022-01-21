import { blogPosts } from './blogPosts';

describe('blogPosts', () => {
  scenario('returns all blogPosts', async (scenario) => {
    const result = await blogPosts();

    expect(result.length).toEqual(Object.keys(scenario.blogPost).length);
  });
});
