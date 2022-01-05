import { Link, routes } from '@redwoodjs/router';
import styled from 'styled-components';

interface BreadcrumItem {
  name: string;
  url?: string;
}

interface Props {
  items: BreadcrumItem[];
}

const Breadcrumb: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      <li>
        <Link to={routes.home()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
          </svg>
        </Link>
      </li>
      {items.map((item) => (
        <li key={`breadcrumb-${item.name}`}>
          {item.url ? (
            <Link to={item.url}>{item.name}</Link>
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  font-size: 0.9rem;
  list-style: none;
  margin: 0;
  padding: 30px 0;

  li {
    position: relative;
  }

  a {
    background: url(/images/arrow.svg) no-repeat right 1px;
    background-size: 12px;
    color: var(--color-text);
    margin-right: 10px;
    padding-right: 25px;
  }

  li > * {
    position: relative;
    top: 1px;
  }

  svg {
    fill: var(--color-text);
    height: 14px;
    margin-top: 2px;
    opacity: 0.7;
    transition: 0.25s;
    width: 14px;
  }

  a:hover svg,
  a:focus svg {
    opacity: 1;
  }
`;

export default Breadcrumb;
