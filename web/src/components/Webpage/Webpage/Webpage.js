import humanize from 'humanize-string';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_WEBPAGE_MUTATION = gql`
  mutation DeleteWebpageMutation($id: Int!) {
    deleteWebpage(id: $id) {
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

const Webpage = ({ webpage }) => {
  const [deleteWebpage] = useMutation(DELETE_WEBPAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Webpage deleted');
      navigate(routes.webpages());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete webpage ' + id + '?')) {
      deleteWebpage({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Webpage {webpage.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{webpage.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{webpage.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{webpage.slug}</td>
            </tr>
            <tr>
              <th>Design</th>
              <td>{webpage.design}</td>
            </tr>
            <tr>
              <th>Html</th>
              <td>{webpage.html}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(webpage.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWebpage({ id: webpage.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(webpage.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Webpage;
