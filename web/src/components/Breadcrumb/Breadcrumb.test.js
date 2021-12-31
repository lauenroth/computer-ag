import { render } from '@redwoodjs/testing/web';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Breadcrumb />);
    }).not.toThrow();
  });
});
