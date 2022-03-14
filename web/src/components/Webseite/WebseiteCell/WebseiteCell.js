import Webseite from 'src/components/Webseite/Webseite';

export const QUERY = gql`
  query FindWebseiteById($id: Int!) {
    webseite: webseite(id: $id) {
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

export const Empty = () => <div>Webseite not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ webseite }) => {
  return <Webseite webseite={webseite} />;
};
