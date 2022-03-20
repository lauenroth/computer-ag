import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WebpageForm from 'src/components/Webpage/WebpageForm';

const CREATE_WEBPAGE_MUTATION = gql`
  mutation CreateWebpageMutation($input: CreateWebpageInput!) {
    createWebpage(input: $input) {
      id
    }
  }
`;

const NewWebpage = () => {
  const [createWebpage, { loading, error }] = useMutation(
    CREATE_WEBPAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Webpage created');
        navigate(routes.webpages());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createWebpage({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Webpage</h2>
      </header>
      <div className="rw-segment-main">
        <WebpageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewWebpage;
