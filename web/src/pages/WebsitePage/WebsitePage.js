import { MetaTags } from '@redwoodjs/web';
import WebseiteCell from 'src/components/WebseiteCell/WebseiteCell';

const WebsitePage = ({ slug }) => {
  return (
    <>
      <MetaTags
        title="Website"
        // description="Website description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>{slug}</h1>
      <WebseiteCell slug={slug} />
    </>
  );
};

export default WebsitePage;
