import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import WebpageForm from 'src/components/Webpage/WebpageForm';

export const QUERY = gql`
  query EditWebpageById($id: Int!) {
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
const UPDATE_WEBPAGE_MUTATION = gql`
  mutation UpdateWebpageMutation($id: Int!, $input: UpdateWebpageInput!) {
    updateWebpage(id: $id, input: $input) {
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

export const Success = ({ webpage }) => {
  const [updateWebpage, { loading, error }] = useMutation(
    UPDATE_WEBPAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Webpage updated');
        navigate(routes.webpages());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateWebpage({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Webpage {webpage.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WebpageForm
          webpage={webpage}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
