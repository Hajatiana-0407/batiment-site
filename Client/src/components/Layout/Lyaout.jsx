import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Lyaout = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    return (
        <BrowserRouter>
            <div className="flex h-screen bg-gray-50 transition-colors">
                <Sidebar
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                    userRole={'Administrateur'}
                />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-y-auto p-6">
                        <Routes>
                            {/* <Route element={<PrivateRoute />}> */}
                            {/* <Route path="/payments" element={<PaymentsModule />} /> */}
                            {/* </Route> */}
                            <Route path="*" element={<div>404 - Page non trouvée</div>} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Lyaout