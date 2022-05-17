import { MetaTags } from '@redwoodjs/web';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import styled from 'styled-components';

const breadcumbItems = [
  {
    name: 'Kursarchiv',
  },
];

const teilnehmer = [
  'Bruno',
  'Emilia',
  'Gesine',
  'Juli',
  'Musa',
  'Mustafa',
  'Nahla',
  'Rowan',
  'William',
  'Yinoll',
];

const KursArchivPage = () => {
  return (
    <>
      <MetaTags title="Kursarchiv | Computer AG" />
      <Breadcrumb items={breadcumbItems} />
      <Wrapper>
        <div>
          <h1>Kursarchiv</h1>

          <section className="stunde">
            <header>
              <h2>#13 Programmieren mit Scratch</h2>
              <p>10.5.2022</p>
            </header>

            <p>
              Heute sehen wir uns Scratch an. Scratch ist eine visuelle
              Programmiersprache mit der man beispielsweise Spiele programmieren
              kann. Und genau das wollen wir heute machen 🙂{' '}
              <a href="/scratch/KatzMaus.sb3">🐱</a>
            </p>

            <p className="buttons">
              <a
                href="https://scratch.mit.edu/projects/editor/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Scratch
              </a>

              <a href="/scratch/Jump.sb3" className="btn btn-primary" download>
                Download: Jump Game
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#12 Benutzerkonten / Eigene Website</h2>
              <p>3.5.2022</p>
            </header>

            <p>
              <a
                href="https://slides.com/d/bosc9Ws/live"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Benutzerkonten / Passwörter
              </a>
            </p>

            <h2>Eigene Website</h2>

            <p>Jede(r) Teilnehmer(in) hat jetzt eine eigene Website!</p>

            <ul>
              {teilnehmer.map((teilnehmer) => (
                <li key={`teilnehmer=${teilnehmer}`}>
                  <a
                    href={`https://${teilnehmer.toLocaleLowerCase()}.computer-ag.com/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {teilnehmer}
                  </a>
                </li>
              ))}
            </ul>

            <p>
              <a
                href="https://codesandbox.io/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Codesandbox
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#11 Datenbanken</h2>
              <p>26.4.2022</p>
            </header>

            <p>
              Heute lernen wir die Grundlagen zum Thema Datenbanken. Was ist
              einen Datenbank? Wofür braucht man sie? Welche Daten können
              gespeichert werden?
            </p>

            <p className="buttons">
              <a
                href="https://slides.com/d/s2b9fNo/live"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Präsentation
              </a>

              <a
                href="http://datenbank.computer-ag.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Zur Datenbank
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#10 Programmierung - Teil 3</h2>
              <p>5.4.2022</p>
            </header>
            <p>Hier geht es zu Code It:</p>

            <h3>Kückenrennen</h3>
            <p className="buttons">
              <a
                href="https://app.code-it-studio.de/course/step/4/44"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Kurs 1
              </a>

              <a
                href="https://app.code-it-studio.de/course/step/10/71"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Kurs 2
              </a>

              <a
                href="https://app.code-it-studio.de/course/step/11/101"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Kurs 3
              </a>

              <a
                href="https://app.code-it-studio.de/makerspace/68"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Eigenes Spiel
              </a>
            </p>

            <h3>Weitere Kurse</h3>
            <p className="buttons">
              <a
                href="https://studio.code.org/s/starwarsblocks/lessons/1/levels/1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Star Wars
              </a>
              <a
                href="https://studio.code.org/s/dance-2019/lessons/1/levels/1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Tanzparty
              </a>
              <a
                href="https://studio.code.org/s/frozen/lessons/1/levels/1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Eiskönigin
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#9 Programmierung - Teil 2</h2>
              <p>29.3.2022</p>
            </header>
            <p>Wir arbeiten weiter an unserem Spiel 🙂</p>
            <p>
              Vorher gibt es noch eine kurze Wiederholung: Was sind Schleifen
              und Bedingungen? Was sind Variablen?
            </p>
            <p>
              <a
                href="https://slides.com/d/L2n4SQo/live"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Präsentation
              </a>
            </p>
            <p>Hier geht es zu Code It:</p>
            <p className="buttons">
              <a
                href="https://app.code-it-studio.de/course/step/4/44"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Kückenrennen - Kurs 1
              </a>

              <a
                href="https://app.code-it-studio.de/course/step/10/71"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Kückenrennen - Kurs 2
              </a>

              <a
                href="https://app.code-it-studio.de/course/step/11/101"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Kückenrennen - Kurs 3
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#8 Programmierung</h2>
              <p>22.3.2022</p>
            </header>
            <p>
              Heute geht es mit der Einführung in die Programmierung los! 🎉
            </p>
            <p>
              Was bedeutet &quot;Programmieren&quot; überhaupt? Was sind
              Anweisungen, Bedingungen und Schleifen?
            </p>
            <p>
              <a
                href="https://slides.com/d/L2n4SQo/live"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Präsentation
              </a>
            </p>
            <p>
              Nach der kurzen Präsentation geht es direkt los: wir programmieren
              unser erstes Spiel!
            </p>
            <p className="buttons">
              <a
                href="https://app.code-it-studio.de/course/step/4/44"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Code it (Kücken Toni)
              </a>

              <a
                href="https://studio.code.org/courses"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Code.org (Minecraft, Anna & Elsa,...)
              </a>
            </p>
          </section>

          <section className="stunde">
            <header>
              <h2>#7 Cascading Style Sheets (CSS)</h2>
              <p>15.3.2022</p>
            </header>
            <p>
              Letzte Woche war der international Frauentag, daher ist die
              Computer AG ausgefallen. Daher blicken wir in den ersten Minuten
              der heutigen Stunde auf Frauen in der IT-Welt: Frauenanteile in
              der IT-Branche in verschiedenen Ländern und Unterschiede in der
              Bezahlung. Außerdem reden wir über zwei Frauen, die großes für die
              (IT) Welt geleistet haben:{' '}
              <a href="https://de.wikipedia.org/wiki/Grace_Hopper">
                Grace Hopper
              </a>{' '}
              und{' '}
              <a href="https://de.wikipedia.org/wiki/Margaret_Hamilton_(Wissenschaftlerin)">
                Margaret Hamilton
              </a>
              .
            </p>
            <p>Danach geht es mit CSS und dem Stylen von HTML Elementen los.</p>
          </section>

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

    ul {
      display: flex;
      flex-flow: wrap;
      gap: 20px;
      list-style: none;
      margin: 30px 0px;
      max-width: var(--max-width);
      padding: 0px;
    }

    ul li {
      background-color: var(--color-secondary);
      border-radius: 10px;
      color: var(--color-background);
      font-size: 0.8rem;
      padding: 5px 10px;
    }
  }

  .buttons {
    display: flex;
    gap: 20px;
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

export default KursArchivPage;
