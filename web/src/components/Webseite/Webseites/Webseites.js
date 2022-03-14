import humanize from 'humanize-string';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/Webseite/WebseitesCell';

const DELETE_WEBSEITE_MUTATION = gql`
  mutation DeleteWebseiteMutation($id: Int!) {
    deleteWebseite(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

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

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const WebseitesList = ({ webseites }) => {
  const [deleteWebseite] = useMutation(DELETE_WEBSEITE_MUTATION, {
    onCompleted: () => {
      toast.success('Webseite deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete webseite ' + id + '?')) {
      deleteWebseite({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Design</th>
            <th>Html</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {webseites.map((webseite) => (
            <tr key={webseite.id}>
              <td>{truncate(webseite.id)}</td>
              <td>{truncate(webseite.name)}</td>
              <td>{truncate(webseite.slug)}</td>
              <td>{truncate(webseite.design)}</td>
              <td>{truncate(webseite.html)}</td>
              <td>{timeTag(webseite.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.webseite({ id: webseite.id })}
                    title={'Show webseite ' + webseite.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWebseite({ id: webseite.id })}
                    title={'Edit webseite ' + webseite.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete webseite ' + webseite.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(webseite.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebseitesList;
