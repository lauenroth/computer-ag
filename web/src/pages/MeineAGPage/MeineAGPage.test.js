import { render } from '@redwoodjs/testing/web';

import MeineAgPage from './MeineAgPage';

describe('MeineAgPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MeineAgPage />);
    }).not.toThrow();
  });
});
