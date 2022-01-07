import styled from 'styled-components';

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

export const Loading = () => (
  <>
    <h1>Anmeldungen: ...</h1>
  </>
);

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ anmeldungen }) => {
  return (
    <>
      <h1>Anmeldungen: {anmeldungen.length}</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Klasse</th>
            <th>Anmerkung</th>
          </tr>
        </thead>
        <tbody>
          {anmeldungen.map((anmeldung) => (
            <tr key={anmeldung.id}>
              <td className="name">{anmeldung.name}</td>
              <td className="klasse">{anmeldung.klasse}</td>
              <td>{anmeldung.anmerkung}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Table = styled.table`
  margin-bottom: 30px;

  th,
  td {
    padding: 10px;
  }
  td {
    background-color: #789abc;
  }

  .name {
    white-space: nowrap;
  }

  .klasse {
    text-align: center;
  }
`;
