import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WebseiteForm from 'src/components/Webseite/WebseiteForm';

const CREATE_WEBSEITE_MUTATION = gql`
  mutation CreateWebseiteMutation($input: CreateWebseiteInput!) {
    createWebseite(input: $input) {
      id
    }
  }
`;

const NewWebseite = () => {
  const [createWebseite, { loading, error }] = useMutation(
    CREATE_WEBSEITE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Webseite created');
        navigate(routes.webseites());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createWebseite({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Webseite</h2>
      </header>
      <div className="rw-segment-main">
        <WebseiteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewWebseite;
