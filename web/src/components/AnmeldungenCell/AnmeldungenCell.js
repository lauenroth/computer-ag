export const QUERY = gql`
  query FindAnmeldungenQuery {
    anmeldungen {
      id
      name
      klasse
      anmerkung
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ anmeldungen }) => {
  return (
    <>
      <p>{anmeldungen.length} Anmeldunge:</p>

      <ul>
        {anmeldungen.map((anmeldung) => (
          <li key={`anmeldung-${anmeldung.id}`}>
            <p>
              {anmeldung.name} ({anmeldung.klasse})
            </p>
            <sub>{anmeldung.anmerkung}</sub>
          </li>
        ))}
      </ul>
    </>
  );
};
