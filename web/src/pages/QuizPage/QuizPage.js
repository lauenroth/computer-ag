import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const QuizPage = () => {
  return (
    <>
      <MetaTags
        title="Quiz"
        // description="Quiz description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>QuizPage</h1>
      <p>
        Find me in <code>./web/src/pages/QuizPage/QuizPage.js</code>
      </p>
      <p>
        My default route is named <code>quiz</code>, link to me with `
        <Link to={routes.quiz()}>Quiz</Link>`
      </p>
    </>
  );
};

export default QuizPage;
