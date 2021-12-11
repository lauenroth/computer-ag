import { render } from '@redwoodjs/testing/web';

import Anmeldung from './Anmeldung';

describe('Anmeldung', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Anmeldung />);
    }).not.toThrow();
  });
});
