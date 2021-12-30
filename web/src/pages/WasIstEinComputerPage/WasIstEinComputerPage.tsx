import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const WasIstEinComputerPage = () => {
  return (
    <>
      <MetaTags title="Was ist ein Computer? | Computer AG" />
      <MainLayout isMaxWidth>
        <p>
          <Link to={routes.uebersicht()}>Zurück zur Übersicht</Link>
        </p>
        <h1>Was ist ein Computer?</h1>
        <p>
          <strong>&quot;Computer&quot;</strong> ist Englisch und heißt soviel
          wie <strong>&quot;Rechner&quot;</strong>.
        </p>
      </MainLayout>
    </>
  );
};

export default WasIstEinComputerPage;
