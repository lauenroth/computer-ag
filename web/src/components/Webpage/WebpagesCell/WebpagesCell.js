import { Link, routes } from '@redwoodjs/router';

import Webpages from 'src/components/Webpage/Webpages';

export const QUERY = gql`
  query FindWebpages {
    webpages {
      id
      name
      slug
      design
      html
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No webpages yet. '}
      <Link to={routes.newWebpage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ webpages }) => {
  return <Webpages webpages={webpages} />;
};
