import Breadcrumb from './Breadcrumb';
import items from './Breadcrumb.mock.json';

export const generated = () => {
  return <Breadcrumb items={items} />;
};

export default { title: 'Components/Breadcrumb' };
