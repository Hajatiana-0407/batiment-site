import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../Store";
type ValidationType = {
    comfirme: boolean;
    isValidationShow: boolean;
    data?: number | string | any[] | Record<string, any>;
    message: string,
    description?: string
}


const initialState: ValidationType = {
    comfirme: false,
    isValidationShow: false,
    data: undefined,
    message: '',
    description: ''
}

const ValidationSlice = createSlice({
    name: 'Validation',
    initialState,
    reducers: {
        validationValidate: (state) => {
            state.comfirme = true;
            state.isValidationShow = false
        },
        validationClean: (state) => {
            state.comfirme = false,
            state.message = '';
            state.description = '';
            state.isValidationShow = false
        },
        showValidation: (state, action: {
            payload: { data: ValidationType['data'], message: string, description?: string }
        }) => {
            const { data, message, description } = action.payload;
            state.data = data;
            state.message = message;
            state.description = description;
            state.isValidationShow = true;
        },
    }
});
export const getValidationState = (state: RootStateType) => state.Validation

export const { validationClean, validationValidate, showValidation } = ValidationSlice.actions;
export default ValidationSlice.reducer; 