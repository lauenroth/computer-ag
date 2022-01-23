import { render } from '@redwoodjs/testing/web';

import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserMenu />);
    }).not.toThrow();
  });
});
