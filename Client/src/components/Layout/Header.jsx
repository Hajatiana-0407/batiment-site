// import { Bell, ChevronDown, LogOut, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deconnexion, getAuthState, toDeconnect } from '../../Redux/Slice/AuthSlice';
import { useEffect } from 'react';
import { BiBell, BiChevronDown, BiLogOut, BiUser } from 'react-icons/bi';

const roleLabels = {
  ROLE_ADMIN: 'Administrateur',
  ROLE_SECRETAIRE: 'Secrétaire',
  ROLE_EMPLOYE: 'Employé',
};

export default function Header() {
  const dispatch = useDispatch();
  const { isdeconnecting, userInfo } = useSelector(getAuthState);

  let userRole = null;
  let userName = '';

  if (userInfo.email !== '' && userInfo.role[0]) {
    userRole = userInfo.role[0];
    userName = userInfo.email;
  }

  // useEffect(() => {
  //   if (comfirme && isdeconnecting) {
  //     dispatch(deconnexion());
  //   }
  //   return () => {
  //     dispatch(validationClean());
  //   };
  // }, [comfirme, isdeconnecting, dispatch]);

  return (
    <header className="shadow-sm border-b bg-white border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div></div>

        <div className="flex items-center space-x-4">


          {/* User Menu */}
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-50">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <BiUser className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">{userName}</span>
              <span className="text-xs text-gray-500">{userRole ? roleLabels[userRole] : '--'}</span>
            </div>
            <BiChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Déconnexion */}
          <button
            className="px-4 py-2 bg-gradient-to-r text-xl from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all"
            onClick={() => {
              dispatch(
                showValidation({
                  data: undefined,
                  message: 'Êtes-vous sûr de vouloir vous déconnecter ?',
                  description:
                    'Cette action est irréversible et toutes les données liées à ce niveau seront supprimées.',
                })
              );
              dispatch(toDeconnect());
            }}
          >
            <BiLogOut />
          </button>
        </div>
      </div>
    </header>
  );
}
