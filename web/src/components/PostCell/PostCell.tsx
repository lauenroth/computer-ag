import { MetaTags } from '@redwoodjs/web';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

export const QUERY = gql`
  query BlogPost($slug: String!) {
    postBySlug(slug: $slug) {
      id
      titel
      text
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ postBySlug }) => {
  const breadcumbItems = [
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: postBySlug.titel,
    },
  ];

  return (
    <>
      <MetaTags title={`${postBySlug.titel} | Computer AG`} />
      <Breadcrumb items={breadcumbItems} />
      <section>
        <h1>{postBySlug.titel}</h1>
        <p>{postBySlug.text}</p>
      </section>
    </>
  );
};
