import { render } from '@redwoodjs/testing/web';

import WasIstEinComputerPage from './WasIstEinComputerPage';

describe('WasIstEinComputerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WasIstEinComputerPage />);
    }).not.toThrow();
  });
});
