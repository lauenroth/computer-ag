import { render } from '@redwoodjs/testing/web';

import Breadcrumb from './Breadcrumb';
import items from './Breadcrumb.mock.json';

describe('Breadcrumb', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Breadcrumb items={items} />);
    }).not.toThrow();
  });
});
