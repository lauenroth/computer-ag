import { MetaTags } from '@redwoodjs/web';
import AnmeldungenCell from 'src/components/AnmeldungenCell';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const AnmeldungenPage = () => {
  return (
    <>
      <MetaTags
        title="Anmeldungen"
        // description="Anmeldungen description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <MainLayout isMaxWidth>
        <AnmeldungenCell />
      </MainLayout>
    </>
  );
};

export default AnmeldungenPage;
