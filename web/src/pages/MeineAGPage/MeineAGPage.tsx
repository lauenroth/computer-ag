import { MetaTags } from '@redwoodjs/web';
import styled from 'styled-components';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import { useAuth } from '@redwoodjs/auth';
// import { Link, routes } from '@redwoodjs/router';

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
            Hier findest du alles zur aktuellen Unterrichtsstunde vom 8.2.2022.
          </p>
          <p>
            <a
              href="https://slides.com/d/gXzWKDs/live"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Zur Präsentation
            </a>
          </p>

          {/* <p>
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
          </p> */}

          <h2>Aufgabe:</h2>

          <ol>
            <li>Öffne das Programm &quot;Writer&quot; von LibreOffice.</li>
            <li>
              Gehe zu der Webseite mit dem Gedicht &quot;Die Made&quot; von
              Heinz Erhardt (siehe Link rechts).
            </li>
            <li>Kopiere alle Strophen des Gedichts zu LibreOffice Writer.</li>
            <li>Mache den Text linksbündig.</li>
            <li>
              Markiere die Überschrift &quot;Die Made&quot; und mache sie zur
              Überschrift 1 (Heading 1).
            </li>
            <li>Mache alle Reimwörter fett und kursiv.</li>
            <li>Gib jeder Strophe eine andere Text- und Hintergrundfarbe.</li>
            <li>
              Speicher das Gedicht unter &quot;Die Made - Heinz
              Erhardt.odt&quot;.
            </li>
          </ol>
        </div>

        <aside>
          <section>
            <h3>Links zur aktuellen Stunde</h3>
            <ul>
              <li>
                <a
                  href="https://slides.com/d/gXzWKDs/live"
                  target="_blank"
                  rel="noreferrer"
                >
                  Präsentation
                </a>
                <p>Dateien, Speicher</p>
              </li>
              <li>
                <a
                  href="http://www.gedichtsuche.de/gedicht/items/Die%20Made%20-%20Erhardt,%20Heinz.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Die Made (Gedicht)
                </a>
              </li>
              {/* <li>
                <Link to={routes.schreiben()}>Schreibtest</Link>
                <p>Teste deine Schreibkenntnisse</p>
              </li> */}
            </ul>
          </section>

          <section>
            <h3>Weitere interessante Links</h3>
            <ul>
              <li>
                <a
                  href="https://klexikon.zum.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  Klexikon
                </a>
                <p>Online-Lexikon für Kinder</p>
              </li>
              <li>
                <a
                  href="https://www.fragfinn.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  fragFINN
                </a>
                <p>Suchmaschine für Kinder</p>
              </li>
              <li>
                <a
                  href="https://www.blinde-kuh.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blinde Kuh
                </a>
                <p>Suchmaschine für Kinder</p>
              </li>
              <li>
                <a
                  href="https://scratch.mit.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scratch
                </a>
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
