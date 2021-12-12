import { render } from '@redwoodjs/testing/web';

import ImpressumPage from './ImpressumPage';

describe('ImpressumPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImpressumPage />);
    }).not.toThrow();
  });
});
