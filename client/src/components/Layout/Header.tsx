import { Bell, ChevronDown, LogOut, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deconnexion, getAuthState, toDeconnect } from '../../Redux/Slice/AuthSlice';
import { AppDispatchType } from '../../Redux/Store';
import { getValidationState, showValidation, validationClean } from '../../Redux/Slice/ValidationSlice';
import { useEffect } from 'react';



const roleLabels = {
  ROLE_ADMIN: 'Administrateur',
  ROLE_SECRETAIRE: 'Secrétaire',
  ROLE_EMPLOYE: 'Employé'
};

type UserRoleType = 'ROLE_ADMIN' | 'ROLE_SECRETAIRE' | 'ROLE_EMPLOYE' | null

export default function Header() {
  const dispatch: AppDispatchType = useDispatch() ;
  const {isdeconnecting } = useSelector( getAuthState ) ;  
  const { userInfo } = useSelector(getAuthState);
  
  
  const { comfirme } = useSelector(getValidationState) ; 
  let userRole: UserRoleType = null;
  let userName = '';
  
  if (userInfo.email !== '' && userInfo.role[0]) {
    userRole = userInfo.role[0] as UserRoleType;
    userName = userInfo.email;
  }

  useEffect(() => {
    if ( comfirme && isdeconnecting ) {
      dispatch(deconnexion()) ; 
    }
    return () => {
      dispatch(validationClean());
    }
  }, [comfirme])


  return (
    <header className="shadow-sm border-b bg-white border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-900">Tableau de Bord</h2>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">
            {userRole ? roleLabels[userRole] : '--'}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-50">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">{userName}</span>
              <span className="text-xs text-gray-500">{userRole ? roleLabels[userRole] : '--'}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Deconnexion */}
          <button className="px-4 py-2 bg-gradient-to-r text-xl from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all" onClick={() => {
            dispatch(showValidation({
              data: undefined ,
              message: 'Êtes-vous sûr de vouloir vous déconnecter ?',
              description: 'Cette action est irréversible et toutes les données liées à ce niveau seront supprimées.'
            }));
            dispatch(toDeconnect())
          }}>
            <LogOut />
          </button>
        </div>
      </div>
    </header>
  );
}
