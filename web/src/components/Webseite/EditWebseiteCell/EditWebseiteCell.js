import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import WebseiteForm from 'src/components/Webseite/WebseiteForm';

export const QUERY = gql`
  query EditWebseiteById($id: Int!) {
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
const UPDATE_WEBSEITE_MUTATION = gql`
  mutation UpdateWebseiteMutation($id: Int!, $input: UpdateWebseiteInput!) {
    updateWebseite(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ webseite }) => {
  const [updateWebseite, { loading, error }] = useMutation(
    UPDATE_WEBSEITE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Webseite updated');
        navigate(routes.webseites());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateWebseite({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Webseite {webseite.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WebseiteForm
          webseite={webseite}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
