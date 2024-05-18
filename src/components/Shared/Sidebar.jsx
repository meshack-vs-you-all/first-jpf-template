import { Link } from 'react-router-dom';
import { userLinks, adminLinks } from '../../constants';

const Sidebar = ({ role }) => {
  const links = role === 'admin' ? adminLinks : userLinks;

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.label} className="p-4 hover:bg-gray-700">
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
