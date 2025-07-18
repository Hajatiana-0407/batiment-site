import { configureStore } from '@reduxjs/toolkit'
import RoleReducer from './Slice/RoleSlice'
import AutReducer from './Slice/AuthSlice' ;
import ValidationReducer from './Slice/ValidationSlice'
import PaiementReducer from './Slice/PaiementSlice' 

export const store = configureStore({
  reducer: {
    Validation : ValidationReducer , 
    Roles : RoleReducer , 
    Auth : AutReducer , 
    Paiement : PaiementReducer 
  },
})

// Types (pour TypeScript)
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch