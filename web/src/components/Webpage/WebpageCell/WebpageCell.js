import Webpage from 'src/components/Webpage/Webpage';

export const QUERY = gql`
  query FindWebpageById($id: Int!) {
    webpage: webpage(id: $id) {
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

export const Empty = () => <div>Webpage not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ webpage }) => {
  return <Webpage webpage={webpage} />;
};
