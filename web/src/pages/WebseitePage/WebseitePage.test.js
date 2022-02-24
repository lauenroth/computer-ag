import { render } from '@redwoodjs/testing/web';

import WebseitePage from './WebseitePage';

describe('WebseitePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WebseitePage />);
    }).not.toThrow();
  });
});
