import { render } from '@redwoodjs/testing/web';

import QuizPage from './QuizPage';

describe('QuizPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuizPage />);
    }).not.toThrow();
  });
});
