import { MetaTags } from '@redwoodjs/web';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import styled from 'styled-components';

const FlyerPage = () => {
  return (
    <>
      <MetaTags title="Computer AG" />
      <MainLayout isMaxWidth>
        <Wrapper>
          <p>
            Die Computer AG startet im neuen Jahr für Schülerinnen und Schüler
            der 3. und 4. Klassen. Das Ziel der AG ist es, den Schulkindern den
            Umgang mit Computern spielerisch nahezubringen. Neben theoretischen
            Themen wird es immer auch die Möglichkeit geben, das Erlernte
            praktisch anzuwenden.
          </p>
          <ul>
            <li>Aufbau eines Computers</li>
            <li>Eingabegeräte</li>
            <li>Betriebssysteme</li>
            <li>Das Internet</li>
            <li>Dateien und Ordner</li>
            <li>Suchmaschinen</li>
            <li>Künstliche Intelligenz</li>
            <li>Soziale Medien</li>
            <li>Word</li>
            <li>Excel</li>
            <li>PowerPoint</li>
            <li>Sicherheit / Passwörter</li>
            <li>VR / AR</li>
            <li>HTML</li>
          </ul>
          <dl>
            <dt>Wann?</dt>
            <dd>
              Dienstags von 14-15 Uhr
              <div>Ab voraussichtlich 11. Januar 2022</div>
            </dd>
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
          <p>Anmeldung bitte über</p>
          <a className="btn" href="https://bit.ly/computer-ag">
            bit.ly/computer-ag
          </a>
        </Wrapper>
      </MainLayout>
    </>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  margin: 30px auto;
  max-width: 630px;

  > :first-child {
    text-align: justify;
    line-height: 1.7;
  }

  ul {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
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

  p {
    text-align: center;
  }

  .btn {
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 auto 300px;
    width: 300px;
  }
`;

export default FlyerPage;
