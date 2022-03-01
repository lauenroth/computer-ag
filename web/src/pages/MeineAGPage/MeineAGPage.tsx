import { MetaTags } from '@redwoodjs/web';
import styled from 'styled-components';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
// import { useAuth } from '@redwoodjs/auth';
// import { Link, routes } from '@redwoodjs/router';

const breadcumbItems = [
  {
    name: 'Meine AG',
  },
];

const MeineAgPage = () => {
  // const { currentUser } = useAuth();

  return (
    <>
      <MetaTags title="Meine AG | Computer AG" />
      <Breadcrumb items={breadcumbItems} />
      <Wrapper>
        <div>
          <h1>Meine AG</h1>
          {/* <p>Hallo {currentUser?.name} 👋</p> */}

          <section className="stunde">
            <header>
              <h2>#6 HTML - weiter geht&rsquo;s</h2>
              <p>1.3.2022</p>
            </header>
            <p>Heute arbeiten wir weiter an den persönlichen Webseiten.</p>
            <p>
              Als Template (Schablone) kann man folgende Seiten verwenden:{' '}
              <a href="/webseite.html" target="_blank" rel="noreferrer">
                webseite.html
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#5 HTML</h2>
              <p>22.02.2022</p>
            </header>
            <p>
              Nachdem wir in der letzten Woche schon etwas über das Internet und
              HTML gesprochen haben, geht es heute so richtig los. Wir bauen
              unsere erste eigene Homepage!
            </p>
            <p>
              Die erste Webseite auf der ganzen Welt wurde übrigens in Europa
              erstellt und ist{' '}
              <a href="http://info.cern.ch/hypertext/WWW/TheProject.html">
                immer noch online
              </a>
              !
            </p>

            <h3>Links zur HTML Stunde</h3>
            <ul>
              <li>
                <a href="/html">HTML Referenz</a>
              </li>
              <li>
                <a
                  href="https://pixabay.com/de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kostenlose Bilder
                </a>
              </li>
              <li>
                <a
                  href="https://wiki.selfhtml.org/wiki/HTML/Tutorials/Einstieg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Selfhtml
                </a>
              </li>
            </ul>
          </section>

          <section className="stunde">
            <header>
              <h2>#4 Das Internet</h2>
              <p>15.2.2022</p>
            </header>
            <p>
              <a
                href="https://slides.com/d/L2n4SQo/live"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Präsentation: Das Internet
              </a>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=uIZh2v7YpP4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eine kurze Geschichte des Internets
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaufda.de/info/apps-in-echtzeit/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apps in Echtzeit
                </a>
              </li>
              <li>
                <a
                  href="http://172.217.11.174"
                  target="_blank"
                  rel="noreferrer"
                >
                  172.217.11.174 (Google)
                </a>
              </li>
            </ul>
            <h3>Text für die HTML Aufgabe</h3>
            <p>Herzlich Willkommen!</p>

            <p>Mein Name ist Jörg. Dies ist meine allererste Webseite!</p>

            <p>
              Seit Januar 2022 nehme ich an der Computer AG an der Grundschule
              am Rüdesheimer Platz teil.
            </p>

            <p>Meine Hobbies sind:</p>

            <p>
              - Gitarre spielen
              <br />
              - Radfahren
              <br />- Skifahren
            </p>

            <p>Meine Lieblingsfächer sind:</p>

            <p>
              - Mathematik
              <br />
              - Englisch
              <br />- Sport
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#3 Daten, Speicher</h2>
              <p>8.2.2022</p>
            </header>
            <p>
              Was sind Daten? Was für Arten von Dateien gibt es? Bit, Byte, 0,
              1? Warum braucht man ein Speichermedium beim Computer und was für
              Arten gibt (bzw. gab) es?
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

            <h3>Aufgabe:</h3>

            <ol>
              <li>Öffne das Programm &quot;Writer&quot; von LibreOffice.</li>
              <li>
                Gehe zu der Webseite mit dem Gedicht &quot;Die Made&quot; von
                Heinz Erhardt (
                <a
                  href="http://www.gedichtsuche.de/gedicht/items/Die%20Made%20-%20Erhardt,%20Heinz.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
                ).
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
          </section>

          <section className="stunde">
            <header>
              <h2>#2 EVA, Tastatur</h2>
              <p>25.1.2022</p>
            </header>
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
          </section>

          <section className="stunde">
            <header>
              <h2>#1 Erste Stunde 🎉</h2>
              <p>18.1.2022</p>
            </header>
            <p>
              Heute war es noch ziemlich chaotisch. Am Anfang war noch nicht
              klar, ob wir Zugang zu den Computern haben, aber dann hat es doch
              für die meisten Kinder geklappt.
            </p>
            <p>
              Nach einer Kennenlernrunde haben wir darüber gesprochen, wo es
              überall Computer gibt und aus welchen Teilen Computer bestehen.
            </p>
          </section>
        </div>

        <aside>
          <section style={{ display: 'none' }}>
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
              {/* <li>
                <Link to={routes.schreiben()}>Schreibtest</Link>
                <p>Teste deine Schreibkenntnisse</p>
              </li> */}
            </ul>
          </section>

          <section>
            <h3>Suchen im Internet</h3>
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
            </ul>
          </section>

          <section>
            <h3>Programmierung</h3>
            <ul>
              <li>
                <a href="/html">HTML Referenz</a>
                <p>Wichtige HTML Elemente</p>
              </li>
              <li>
                <a
                  href="https://jsfiddle.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JSFiddle
                </a>
                <p>Spielwiese für HTML, CSS, JavaScript</p>
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

  .stunde {
    background-color: var(--color-background-secondary);
    border-radius: 10px;
    color: var(--color-background);
    margin: 30px 0 30px;
    padding: 20px;

    header {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      margin-top: 0;
    }
  }

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
