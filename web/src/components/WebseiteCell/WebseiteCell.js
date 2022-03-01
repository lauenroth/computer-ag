export const QUERY = gql`
  query WebsiteQuery($slug: String!) {
    webseite: websiteBySlug(slug: $slug) {
      slug
      name
      design
    }
  }
`;

export const Loading = () => <div>Webseite wird geladen...</div>;

export const Empty = () => <div>Die Webseite ist noch leer.</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Fehler: {error.message}</div>
);

export const Success = ({ webseite }) => {
  return <div>{JSON.stringify(webseite)}</div>;
};
