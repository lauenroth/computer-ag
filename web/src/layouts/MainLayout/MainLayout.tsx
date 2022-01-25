import styled, { css } from 'styled-components';
import UserMenu from 'src/components/UserMenu/UserMenu';
import { useAuth } from '@redwoodjs/auth';

interface Props {
  isMaxWidth?: boolean;
  maxWidth?: 'default' | 'wider';
}

const MainLayout: React.FC<Props> = ({ children, isMaxWidth, maxWidth }) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <UserMenu />
      <MainHeader className="main">
        <img
          src="/images/makey.png"
          alt="MakeyMakey"
          className="makey"
          height="80"
        />
        <h1>
          <a href="/">Computer AG</a>
          <div>
            <span>Grundschule</span> am Rüdesheimer Platz
          </div>
        </h1>
        <img src="/images/vr.png" alt="VR Brille" className="vr" />
      </MainHeader>
      {isMaxWidth ? (
        <CenteredWrapper maxWidth={maxWidth}>{children}</CenteredWrapper>
      ) : (
        children
      )}
      <MainFooter>
        <ul>
          <li>
            <a href="/impressum">Impressum</a>
          </li>
          <li>
            <a href="/datenschutz">Datenschutz</a>
          </li>
        </ul>
      </MainFooter>
    </>
  );
};

const MainHeader = styled.header`
  align-items: center;
  background-color: #fff;
  color: var(--color-background);
  display: flex;
  height: 100px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: 0.25s;
  z-index: 10;

  h1 {
    letter-spacing: 1px;
    margin: 0;
    position: relative;
  }

  a {
    color: var(--color-background);
  }

  a:hover {
    text-decoration: none;
  }

  h1 div {
    display: block;
    font-size: 12px;
    letter-spacing: 0;
    margin-top: -7px;
  }

  h1 span {
    margin-right: 8px;
  }

  .vr {
    height: 90px;
    position: absolute;
    left: 30px;
    top: 25px;
    transition: top 0.25s;
  }

  .vr:hover {
    top: 10px;
  }

  .makey {
    bottom: -40px;
    right: -50px;
    opacity: 0.9;
    position: fixed;
    transform: rotate(40deg);
    transition: 0.25s;
    z-index: 1;
  }

  .makey:hover {
    bottom: 10px;
    right: 10px;
    opacity: 1;
    transform: rotate(0deg);
  }

  @media (max-width: 800px) {
    height: 80px;

    h1 {
      font-size: 32px;
    }

    h1 div {
      font-size: 10px;
    }

    .vr {
      height: 60px;
      right: 5px;
      top: 28px;

      &:hover {
        top: 20px;
      }
    }
  }
`;

const MainFooter = styled.footer`
  align-items: center;
  background-color: var(--color-border);
  box-shadow: 0 0 5px var(--color-border);
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  position: relative;
  z-index: 1;

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  li {
    color: var(--color-background);
    font-size: 12px;
    position: relative;
  }

  a {
    color: var(--color-background);
    transition: 0.25s;
  }

  a:hover,
  a:focus {
    color: var(--color-secondary);
    opacity: 0.6;
    text-decoration: none;
  }

  li:not(:last-child)::before {
    content: '|';
    position: absolute;
    right: -12px;
    top: 0;
  }
`;

const CenteredWrapper = styled.main<{ maxWidth?: 'default' | 'wider' }>`
  ${(props) => css`
    max-width: ${props.maxWidth === 'default' ? '800px' : '1200px'};
    padding: 0 30px;
  `}
`;

export default MainLayout;
