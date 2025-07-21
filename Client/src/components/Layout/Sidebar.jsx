import { useEffect } from 'react';
import { FaCoins } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { TbLayoutDashboard } from 'react-icons/tb';
// import {
//   LayoutDashboard,
//   Coins,
//   Settings,
// } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

// Liste des items de menu
const sidebarItems = [
  { id: 'payments', label: 'Payements', icon: FaCoins, path: '/payments' },
];

export default function Sidebar({ activeSection, onSectionChange }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/').filter(Boolean)[0] || '';
    onSectionChange(path);
  }, [location, onSectionChange]);

  const filteredItems = sidebarItems;

  return (
    <div className="w-64 shadow-xl border-r bg-white border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
            <TbLayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">CleanMada</h1>
            <p className="text-sm text-gray-500">Agence de Nettoyage</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const hasActiveSubItem = false;
          return (
            <div key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive: navIsActive }) => {
                  const active = navIsActive || isActive || hasActiveSubItem;
                  return `w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${active
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`;
                }}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-5 h-5 ${isActive || hasActiveSubItem ? 'text-white' : 'text-gray-500'
                      }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </div>
              </NavLink>
            </div>
          );
        })}
      </nav>

      {/* Paramètre */}
      <div className="p-4 border-t border-gray-200">
        <NavLink
          to="/parametre"
          className={({ isActive }) =>
            `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`
          }
        >
          <MdSettings className="w-5 h-5" />
          <span className="font-medium">Paramètres</span>
        </NavLink>
      </div>
    </div>
  );
}
