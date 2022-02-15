import { render } from '@redwoodjs/testing/web';

import HtmlPage from './HtmlPage';

describe('HtmlPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HtmlPage />);
    }).not.toThrow();
  });
});
