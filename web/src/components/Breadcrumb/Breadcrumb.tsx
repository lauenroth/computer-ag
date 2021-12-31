import { Link, routes } from '@redwoodjs/router';
import styled from 'styled-components';

const Breadcrumb = () => {
  return (
    <Wrapper>
      <li>
        <Link to={routes.home()}>Startseite</Link>
      </li>
      <li>
        <Link to={routes.uebersicht()}>Übersicht</Link>
      </li>
      <li>Was ist ein Computer?</li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  font-size: 0.9rem;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 30px 0;

  li {
    position: relative;
  }

  li::before {
    content: '/';
    position: absolute;
    left: -15px;
  }

  li:first-child::before {
    display: none;
  }

  a {
    color: var(--color-text);
  }
`;

export default Breadcrumb;
