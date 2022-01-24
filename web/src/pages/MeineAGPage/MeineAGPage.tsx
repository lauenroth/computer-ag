import { MetaTags } from '@redwoodjs/web';
import styled from 'styled-components';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router';

const breadcumbItems = [
  {
    name: 'Meine AG',
  },
];

const MeineAgPage = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <MetaTags title="Meine AG | Computer AG" />
      <Breadcrumb items={breadcumbItems} />
      <Wrapper>
        <div>
          <h1>Meine AG</h1>
          <p>Hallo {currentUser?.name} 👋</p>
          <p>
            Hier findest du alles zur aktuellen Unterrichtsstunde vom 25.1.2022.
          </p>
          <p>
            Heute erinnern wir uns an <strong>&quot;EVA&quot;</strong>. Wofür
            stehen die einzelnen Buchstaben? Was gibt es für Beispiele?
          </p>
          <p>
            Was ist eine Tastatur? Was gibt es für Unterschiede? Was bedeuten
            die Tasten?
          </p>
          <p>
            <a
              href="https://slides.com/d/9q3svD4/live"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Zur Präsentation
            </a>
          </p>
        </div>

        <aside>
          <section>
            <h3>Links zur aktuellen Stunde</h3>
            <ul>
              <li>
                <a
                  href="https://slides.com/d/9q3svD4/live"
                  target="_blank"
                  rel="noreferrer"
                >
                  Präsentation
                </a>
                <p>EVA, Tastaturen</p>
              </li>
              <li>
                <Link to={routes.schreiben()}>Schreibtest</Link>
                <p>Teste deine Schreibkenntnisse</p>
              </li>
            </ul>
          </section>

          <section>
            <h3>Weitere interessante Links</h3>
            <ul>
              <li>
                <a href="https://klexikon.zum.de">Klexikon</a>
                <p>Online-Lexikon für Kinder</p>
              </li>
              <li>
                <a href="https://www.fragfinn.de/">fragFINN</a>
                <p>Suchmaschine für Kinder</p>
              </li>
              <li>
                <a href="https://www.blinde-kuh.de/">Blinde Kuh</a>
                <p>Suchmaschine für Kinder</p>
              </li>
              <li>
                <a href="https://scratch.mit.edu/">Scratch</a>
                <p>Programmiersprache (Englisch)</p>
              </li>
            </ul>
          </section>
        </aside>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: grid;
  gap: 30px;
  grid-template-columns: auto 260px;

  aside {
    position: sticky;
    top: 30px;

    section {
      background-color: var(--color-background-secondary);
      border-radius: 10px;
      color: var(--color-background);
      margin: 30px 0 auto;
      padding: 20px;
    }

    h3 {
      margin-top: 0;
    }

    ul {
      font-size: 0.9rem;
      list-style: none;
      margin: 0;
      padding: 0;

      p {
        font-size: 0.8rem;
      }
    }

    a:hover {
      color: var(--color-background);
      text-decoration: none;
    }
  }

  @media (max-width: 700px) {
    display: block;

    aside {
      margin-bottom: 30px;
    }
  }
`;

export default MeineAgPage;
