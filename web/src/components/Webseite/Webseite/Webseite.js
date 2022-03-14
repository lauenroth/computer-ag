import humanize from 'humanize-string';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_WEBSEITE_MUTATION = gql`
  mutation DeleteWebseiteMutation($id: Int!) {
    deleteWebseite(id: $id) {
      id
    }
  }
`;

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value));
      return humanizedValues.join(', ');
    } else {
      return humanize(values);
    }
  }
};

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const Webseite = ({ webseite }) => {
  const [deleteWebseite] = useMutation(DELETE_WEBSEITE_MUTATION, {
    onCompleted: () => {
      toast.success('Webseite deleted');
      navigate(routes.webseites());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete webseite ' + id + '?')) {
      deleteWebseite({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Webseite {webseite.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{webseite.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{webseite.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{webseite.slug}</td>
            </tr>
            <tr>
              <th>Design</th>
              <td>{webseite.design}</td>
            </tr>
            <tr>
              <th>Html</th>
              <td>{webseite.html}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(webseite.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWebseite({ id: webseite.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(webseite.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Webseite;
