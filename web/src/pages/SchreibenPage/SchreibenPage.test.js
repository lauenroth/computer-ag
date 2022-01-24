import { render } from '@redwoodjs/testing/web';

import SchreibenPage from './SchreibenPage';

describe('SchreibenPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SchreibenPage />);
    }).not.toThrow();
  });
});
