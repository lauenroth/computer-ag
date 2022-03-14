import { Link, routes } from '@redwoodjs/router';

import Webseites from 'src/components/Webseite/Webseites';

export const QUERY = gql`
  query FindWebseites {
    webseites {
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
      {'No webseites yet. '}
      <Link to={routes.newWebseite()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ webseites }) => {
  return <Webseites webseites={webseites} />;
};
