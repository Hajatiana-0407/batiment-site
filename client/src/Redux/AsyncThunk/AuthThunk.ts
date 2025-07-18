import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
export type LoginResType = {
    token: string,
    error: boolean
}


export const login = createAsyncThunk('Login', async ({ email, password }: { email: string; password: string }): Promise<LoginResType> => {
    const response = await api.post('/login_check', {
        email, password
    })

    if (response.data.token) {
        return {
            token: response.data.token,
            error: false
        }
    };
    return {
        token: '',
        error: true
    }

})