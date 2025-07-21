import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Slice/AuthSlice' ;

export const store = configureStore({
  reducer: {
    Auth : AuthReducer , 
  },
})
