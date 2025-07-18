import { useEffect, useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import PaymentsModule from './components/Modules/Paiement/PaymentsModule';

import { Routes, Route, useLocation } from 'react-router-dom';
import { User } from './types';
import Login from './components/Auth/Login';
import { useDispatch } from 'react-redux';
import { AppDispatchType } from './Redux/Store';
import { testeAuthecation } from './Redux/Slice/AuthSlice';
import PrivateRoute from './Security/PrivateRoute';
import Alert from './components/Alert';

const currentUser: User = {
  id: '1',
  name: 'Rakoto Admin',
  email: 'admin@cleanmada.mg',
  role: 'admin'
};

function App() {
  const dispatch: AppDispatchType = useDispatch();

  const [activeSection, setActiveSection] = useState('dashboard');
  const currentPath = useLocation().pathname;

  useEffect(() => {
    dispatch(testeAuthecation());
  }, [dispatch])

  if (currentPath === '/') return <Login />

  return (
    <>
      <Alert />
      <div className="flex h-screen bg-gray-50 transition-colors">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          userRole={currentUser.role}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/payments" element={<PaymentsModule />} />
              </Route>
              <Route path="*" element={<div>404 - Page non trouvée</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
