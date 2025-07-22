import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [activeOnglet, setActiveOnglet] = useState('accueil');   

    return (
        <AppContext.Provider value={{
            activeOnglet,
            setActiveOnglet,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext); 