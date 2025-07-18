import { createSlice } from "@reduxjs/toolkit";
import { getAllReservations } from "../AsyncThunk/ReservationThunk";
import { ActionType, ReservationType } from "../../types";
import { RootStateType } from "../Store";

type InitialStateType = {
    datas: ReservationType[] , 
    action : ActionType , 
    page : number 
}

const initialState: InitialStateType = {
    action: {
        isLoading: false,
        isDeleting: false,
        isUpdating: false
    },
    datas: [],
    page: 1,
}

const ReservationSlice = createSlice({
    name : 'Reservation' , 
    initialState , 
    reducers : {
    } , 
    extraReducers ( builder ) {
        // ***************** Read ******************** //
        builder
        .addCase(getAllReservations.pending , ( state ) => {
            state.action.isLoading = true 
        })
        .addCase(getAllReservations.fulfilled , ( state , action: {payload :ReservationType[] }  ) => {
            state.action.isLoading = false ; 
            state.datas = action.payload  
        })
        .addCase(getAllReservations.rejected , ( state ) => {
            state.action.isLoading = false ;
        })
    }
})

export const getRoleState = ( state: RootStateType ) => state.Roles
export default ReservationSlice.reducer ; 
