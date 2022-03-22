import { render } from '@redwoodjs/testing/web';

import KursArchivPage from './KursArchivPage';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KursArchivPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KursArchivPage />);
    }).not.toThrow();
  });
});
