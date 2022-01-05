import { routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const breadcumbItems = [
  {
    name: 'Übersicht',
    url: routes.uebersicht(),
  },
  {
    name: 'Was ist ein Computer?',
  },
];

const WasIstEinComputerPage = () => {
  return (
    <>
      <MetaTags title="Was ist ein Computer? | Computer AG" />
      <MainLayout isMaxWidth>
        <Breadcrumb items={breadcumbItems} />
        <h1>Was ist ein Computer?</h1>
        <p>
          Ob Smartphone, Tablet, Taschenrechner, die Spielkonsole, die Kasse im
          Supermarkt oder der Boardcomputer im Auto - Computer umgeben uns
          überall.
        </p>
        <p>
          <strong>&quot;Computer&quot;</strong> ist Englisch und heißt soviel
          wie <strong>&quot;Rechner&quot;</strong>. Dabei kann er weit mehr als
          schnell rechnen.
        </p>
      </MainLayout>
    </>
  );
};

export default WasIstEinComputerPage;
