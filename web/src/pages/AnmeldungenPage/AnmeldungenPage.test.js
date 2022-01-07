import { render } from '@redwoodjs/testing/web';

import AnmeldungenPage from './AnmeldungenPage';

describe('AnmeldungenPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnmeldungenPage />);
    }).not.toThrow();
  });
});
