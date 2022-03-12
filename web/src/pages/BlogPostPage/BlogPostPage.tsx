import PostCell from 'src/components/PostCell/PostCell';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const BlogPostPage = ({ slug }) => {
  return (
    <MainLayout isMaxWidth>
      <PostCell slug={slug} />
    </MainLayout>
  );
};

export default BlogPostPage;
