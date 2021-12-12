import { render } from '@redwoodjs/testing/web';

import DatenschutzPage from './DatenschutzPage';

describe('DatenschutzPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DatenschutzPage />);
    }).not.toThrow();
  });
});
