import { render } from '@redwoodjs/testing/web';

import ProfilPage from './ProfilPage';

describe('ProfilPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfilPage />);
    }).not.toThrow();
  });
});
