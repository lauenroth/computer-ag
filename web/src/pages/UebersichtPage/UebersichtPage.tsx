import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import MainLayout from 'src/layouts/MainLayout/MainLayout';
import styled from 'styled-components';

const UebersichtPage = () => {
  return (
    <>
      <MetaTags title="Kursübersicht | Computer AG" />
      <MainLayout>
        <Wrapper>
          <div>
            <h1>Kursübersicht</h1>
            <p>
              Hier findet ihr eine Übersicht über die Themen, die wir in der
              Computer AG besprechen:
            </p>
            <List>
              <li>
                <Link to={routes.wasIstEinComputer()}>
                  1. Was ist ein Computer?
                </Link>
              </li>
              <li>
                <p>2. Woraus besteht ein Computer?</p>
              </li>
              <li>
                <p>3. Eingabegeräte</p>
              </li>
              <li>
                <p>4. Benutzerkonten</p>
              </li>
              <li>
                <p>5. Dateien und Ordner</p>
              </li>
              <li>
                <p>6. Das Internet</p>
              </li>
              <li>
                <p>7. Suchmaschinen</p>
              </li>
              <li className="more">Weitere Themen folgen in Kürze...</li>
            </List>
          </div>

          <aside>
            <h3>Interessante externe Links</h3>
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
          </aside>
        </Wrapper>
      </MainLayout>
    </>
  );
};

const Wrapper = styled.main`
  display: grid;
  gap: 30px;
  grid-template-columns: auto 260px;
  padding: 30px;

  aside {
    background-color: var(--color-background-secondary);
    border-radius: 10px;
    color: var(--color-background);
    margin: 30px 0 auto;
    padding: 20px;
    position: sticky;
    top: 30px;

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
`;

const List = styled.ol`
  background-color: var(--color-background-secondary);
  border-radius: 8px;
  color: var(--color-background);
  padding: 20px;

  li {
    align-items: center;
    color: var(--color-background);
    display: flex;
    font-size: 0.8rem;
    gap: 10px;
    margin-bottom: 10px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    &.more {
      padding-top: 10px;
    }

    a,
    p {
      background-color: #e3e3e3;
      border-radius: 8px;
      border: 1px solid transparent;
      color: #777;
      font-size: 1rem;
      margin: 0;
      opacity: 0.75;
      padding: 5px 10px;
      transition: 0.25s;
    }

    a {
      background-color: var(--color-secondary);
      color: var(--color-background);
      opacity: 0.85;
      position: relative;
      text-decoration: none;

      &:hover {
        border-color: rgb(191, 208, 225);
        opacity: 1;
      }
    }
  }
`;

export default UebersichtPage;
