import { useAuth } from '@redwoodjs/auth';
import styled from 'styled-components';

const UserMenu = () => {
  const { logOut, isAuthenticated, currentUser } = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);

  return isAuthenticated ? (
    <MenuWrapper>
      <button onClick={() => setShowMenu(!showMenu)}>
        <img src="/images/user.png" alt="User" height="40" width="40" />
        Hallo, {currentUser.name}!
      </button>
      {showMenu && (
        <ul>
          <li>
            <button onClick={logOut}>abmelden</button>
          </li>
        </ul>
      )}
    </MenuWrapper>
  ) : null;
};

const MenuWrapper = styled.nav`
  left: 30px;
  position: absolute;
  top: 30px;
  z-index: 10;

  > button {
    align-items: center;
    background-color: transparent;
    color: var(--color-background);
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
  }

  img {
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 10px 0;
    padding: 0;
    position: absolute;
    z-index: 10;
  }
`;

export default UserMenu;
