import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Settings as SettingsIcon, Grid, HelpCircle, MessageSquare, X, List, Calendar } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);      
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: <Grid size={20} />, label: 'Overview' },
    { path: '/tasks', icon: <List size={20} />, label: 'Tasks' },
    { path: '/planning', icon: <Calendar size={20} />, label: 'Planning' },
    { path: '/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
    { path: '/settings', icon: <SettingsIcon size={20} />, label: 'Settings' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 p-2 rounded-md top-4 left-4 lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`
        fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40
        lg:translate-x-0 lg:w-64
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full'}
      `}>
        <div className="flex items-center p-4 space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-md">
            <span className="font-bold text-white">N</span>
          </div>
          <span className="font-semibold">Nuegas</span>
        </div>

        <ul className="mt-6">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  flex items-center space-x-3 px-4 py-3 text-sm
                  ${isActivePath(item.path) 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-8 left-4 right-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-2 space-x-2">
              <HelpCircle size={20} className="text-gray-600" />
              <span className="font-semibold">Help Center</span>
            </div>
            <p className="text-sm text-gray-600">Having Trouble? Learning Product development?</p>
            <button className="mt-3 text-sm text-gray-700 hover:text-gray-900">
              Go to Help Center
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
