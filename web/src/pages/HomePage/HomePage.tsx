import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Anmeldung from 'src/components/Anmeldung/Anmeldung';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Computer AG"
        description="Website der Computer AG von der Grundschule am Rüdesheimer Platz in Berlin"
      />
      <MainWrapper>
        <section>
          <h1>Herzlich Willkommen!</h1>
          <p>
            Das Ziel der Computer AG ist es, Schulkindern der 3. und 4. Klasse
            den Umgang mit Computern spielerisch nahezubringen. Neben
            theoretischen Themen wird es immer auch die Möglichkeit geben, das
            Erlernte praktisch anzuwenden.
          </p>

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

          <p>
            <Link to={routes.kursArchiv()} className="btn btn-primary">
              Ältere Stunden
            </Link>
          </p>

          {/* <p>
            <Link to={routes.meineAg()} className="btn btn-primary">
              Zur Kursübersicht
            </Link>
          </p> */}

          {/* <h2>
            Themen (<abbr title="unter anderem">u.a.</abbr>)
          </h2>
          <ul>
            <li>Computer im Alltag</li>
            <li>Aufbau eines Computers</li>
            <li>Hardware</li>
            <li>Software</li>
            <li>Eingabegeräte</li>
            <li>Speichermedien</li>
            <li>Betriebssysteme</li>
            <li>Dateien und Ordner</li>
            <li>Das Internet</li>
            <li>Suchmaschinen</li>
            <li>Libre Office</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Soziale Medien</li>
            <li>Sicherheit / Passwörter</li>
            <li>Künstliche Intelligenz</li>
            <li>VR / AR</li>
            <li>Apps</li>
            <li>Programmierung</li>
            <li>Scratch</li>
            <li>Barrierefreiheit</li>
            <li>Netzwerke</li>
            <li>Bluetooth / NFC</li>
            <li>QR-Code / RFID</li>
          </ul> */}

          <h2>Wann, wo, wie?!?</h2>
          <p>Die Computer AG findet wie folgt statt:</p>
          <dl>
            <dt>Wann?</dt>
            <dd>Dienstags von 14-15 Uhr</dd>
            <dt>Wo?</dt>
            <dd>Computerraum der Grundschule am Rüdesheimer Platz</dd>
            <dt>Für wen?</dt>
            <dd>
              10 Kinder der 3. bzw 4. Klasse
              <div>Nur nach Anmeldung!</div>
            </dd>
            <dt>Kosten?</dt>
            <dd>Die Teilnahme an der Computer AG ist kostenlos.</dd>
          </dl>

          <h2>Anmeldung</h2>
          <p className="info">
            Die Gruppe ist derzeit leider voll, daher werden neue Anmeldungen
            auf die Warteliste gesetzt. Sollte ein Platz frei werden, wird unter
            den Kindern der Warteliste ausgelost.
          </p>
          <p>
            <button
              onClick={() => {
                document.body.classList.add('modal');
                document.getElementById('name').focus();
              }}
            >
              Zur Warteliste
            </button>
          </p>
        </section>

        <aside>
          <img
            src="https://Jörg.dev/static/jorg-29ca016ac01ed3bc37aa690f6827d3f5.webp"
            width="100"
            height="100"
            alt="Jörg Lauenroth"
          />
          <h3>
            Hallo <span>👋</span>
          </h3>
          <p>Mein Name ist Jörg Lauenroth.</p>
          <p>
            Mittlerweile habe ich knapp 20 Jahre Erfahrung im Bereich
            Web-Entwicklung. Derzeit arbeite ich als Front-end Lead bei{' '}
            <a href="https://www.worldia.com/">Worldia</a>, einem Startup für
            Individualreisen.
          </p>
          <p>
            Meine beiden Töchter gehen auf die Grundschule am Rüdesheimer Platz,
            daher versuche ich mich dort zu engagieren - seit Anfang 2020 im
            Förderverein und seit Januar 2022 mit der Computer AG.
          </p>
          <p>
            Bei Fragen oder Anregungen erreichen Sie mich am besten per E-Mail
            an <a href="mailto:hi@computer-ag.com">hi@computer-ag.com</a>.
          </p>
        </aside>
      </MainWrapper>
      <Anmeldung />
    </>
  );
};

const MainWrapper = styled.main`
  align-items: flex-start;
  display: grid;
  gap: 50px;
  grid-template-columns: auto 300px;
  padding: 30px;
  transition: 0.25s;

  h2 {
    margin-top: 60px;
  }

  abbr {
    font-family: inherit;
    text-decoration: none;
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

  li {
    background-color: var(--color-secondary);
    border-radius: 10px;
    color: var(--color-background);
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  dl {
    background-color: #fff;
    border-radius: 10px;
    color: var(--color-background);
    display: grid;
    grid-template-columns: 120px auto;
    gap: 20px 0;
    margin-bottom: 30px;
    max-width: 580px;
    padding: 20px;
  }

  dt {
    font-family: 'Cabin Sketch', cursive;
    font-size: 20px;
  }

  dd {
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  dd div {
    font-size: 12px;
    padding-top: 2px;
  }

  aside {
    background-color: #fff;
    border-radius: 10px;
    color: var(--color-background);
    display: grid;
    font-size: 0.9rem;
    gap: 20px;
    margin-top: 40px;
    padding: 30px 20px 20px;
    position: sticky;
    text-align: justify;
    top: 60px;
  }

  aside img {
    background-color: var(--color-secondary);
    border: 4px solid var(--color-background);
    border-radius: 50%;
    position: absolute;
    right: 40px;
    top: -40px;
    transition: 1s;
  }

  aside img:hover {
    transform: rotateZ(365deg);
  }

  aside h3 {
    font-size: 1.4rem;
    margin: 0px;
  }

  aside h3 span {
    animation-name: wave-animation;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-delay: 2s;
    display: inline-block;
    transform-origin: 70% 70%;
  }

  aside p {
    margin: 0;
  }

  .info {
    max-width: 540px;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }

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

  @media (min-width: 1260px) {
    ul {
      justify-content: space-between;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: auto;
    padding: 15px;

    h1 {
      font-size: 32px;
    }

    li {
      font-size: 12px;
    }
    dl {
      grid-template-columns: 100px auto;
    }
  }

  @media (max-width: 600px) {
    button {
      width: 100%;
    }
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    22% {
      transform: rotate(14deg);
    }
    24% {
      transform: rotate(-8deg);
    }
    26% {
      transform: rotate(14deg);
    }
    28% {
      transform: rotate(-4deg);
    }
    30% {
      transform: rotate(10deg);
    }
    32% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default HomePage;
