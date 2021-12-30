import { render } from '@redwoodjs/testing/web';

import UebersichtPage from './UebersichtPage';

describe('UebersichtPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UebersichtPage />);
    }).not.toThrow();
  });
});
