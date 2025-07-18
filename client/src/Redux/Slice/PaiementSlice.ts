import { createSlice } from "@reduxjs/toolkit";
import { ActionType, PaiementType } from "../../types";
import { RootStateType } from "../Store";
import { getAllPaiements } from "../AsyncThunk/PaiementThunk";

type InitialStateType = {
    datas: PaiementType[] , 
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

const PaiementSlice = createSlice({
    name : 'Paiement', 
    initialState , 
    reducers : {
    } , 
    extraReducers ( builder ) {
        // ***************** Read ******************** //
        builder
        .addCase(getAllPaiements.pending , ( state ) => {
            state.action.isLoading = true 
        })
        .addCase(getAllPaiements.fulfilled , ( state , action: {payload :PaiementType[] }  ) => {
            state.action.isLoading = false ; 
            state.datas = action.payload  
        })
        .addCase(getAllPaiements.rejected , ( state ) => {
            state.action.isLoading = false ;
        })
    }
})

export const getPaiementState = ( state: RootStateType ) => state.Paiement
export default PaiementSlice.reducer ; 
