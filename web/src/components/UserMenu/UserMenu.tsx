import { useAuth } from '@redwoodjs/auth';
import { Link, navigate, routes } from '@redwoodjs/router';
import styled, { css } from 'styled-components';

const UserMenu = () => {
  const { logOut, isAuthenticated, currentUser } = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);

  return isAuthenticated ? (
    <>
      <AvatarButton onClick={() => setShowMenu(!showMenu)}>
        Hallo {currentUser?.name}!
        <Avatar>
          <img src={currentUser?.avatar} alt={currentUser?.name} />
        </Avatar>
      </AvatarButton>
      <MenuWrapper showMenu={showMenu}>
        <ul>
          <li>
            <button
              onClick={() => {
                setShowMenu(false);
                navigate(routes.meineAg());
              }}
            >
              Meine AG
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setShowMenu(false);
                navigate(routes.profil());
              }}
            >
              Mein Profil
            </button>
          </li>
          <li>
            <button onClick={logOut}>Abmelden</button>
          </li>
        </ul>
      </MenuWrapper>
    </>
  ) : (
    <Link
      to={routes.login()}
      className="btn btn-primary"
      style={{ position: 'absolute', top: '26px', right: '30px', zIndex: '20' }}
    >
      Anmelden
    </Link>
  );
};

const AvatarButton = styled.button`
  position: absolute;
  right: 20px;
  top: 30px;
  z-index: 15;

  align-items: center;
  background-color: transparent;
  color: var(--color-background);
  display: flex;
  font-family: 'Cabin Sketch', Helvetica, cursive;
  font-size: 18px;
  gap: 10px;
  margin: 0;
  padding: 0 15px;
`;

const MenuWrapper = styled.nav<{ showMenu: boolean }>`
  ${(props) => css`
    ul {
      background-color: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0 3px 6px rgba(140, 149, 159, 0.55);
      list-style: none;
      margin: 0;
      min-width: 160px;
      padding: 0;
      position: absolute;
      top: -150px;
      right: 20px;
      transition: 0.25s;
      z-index: 10;

      button,
      a {
        align-items: center;
        background-color: transparent;
        color: var(--color-background);
        display: flex;
        height: 50px;
        justify-content: center;
        padding: 0;
        transition: 0.25s;
        width: 100%;

        &:hover,
        &:focus {
          background-color: #f5f5f5;
          text-decoration: none;
        }
      }

      li {
        border-top: 1px solid #ddd;
      }
    }

    ${props.showMenu &&
    css`
      ul {
        top: 100px;
      }
    `}
  `}
`;

const Avatar = styled.div`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(140, 149, 159, 0.15);
  cursor: pointer;
  height: 40px;
  overflow: hidden;
  width: 40px;

  img {
    width: 100%;
  }
`;

export default UserMenu;
