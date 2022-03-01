import { render } from '@redwoodjs/testing/web';

import WebsitePage from './WebsitePage';

describe('WebsitePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WebsitePage />);
    }).not.toThrow();
  });
});
