import { createSlice } from "@reduxjs/toolkit";
import { ActionType, TokenPayload } from "../../types";
import { login, LoginResType } from "../AsyncThunk/AuthThunk";
import { RootStateType } from "../Store";
import { jwtDecode } from "jwt-decode";

type InitialStateType = {
    token: string;
    action: ActionType,
    userInfo: {
        email: string;
        role: string[]
    }
    isAuthenticated: boolean,
    error: boolean;
    isdeconnecting: boolean
}


const initialState: InitialStateType = {
    token: localStorage.getItem('token') as string || '',
    userInfo: {
        email: '',
        role: []
    },
    action: {
        isLoading: false,
        isDeleting: false,
        isUpdating: false
    },
    isAuthenticated: false,
    error: false,
    isdeconnecting: false
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        testeAuthecation: (state) => {
            if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
                state.token = localStorage.getItem('token') as string;
                state.isAuthenticated = true;
                state.error = false;

                const decode = jwtDecode<TokenPayload>(localStorage.getItem('token') as string)
                state.userInfo.role = decode.roles;
                state.userInfo.email = decode.username;
            }
        },
        toDeconnect: (state) => {
            state.isdeconnecting = true;
        },
        deconnexion: () => {
            localStorage.setItem('token' , '')  ; 
            return {
                token: '',
                userInfo: {
                    email: '',
                    role: []
                },
                action: {
                    isLoading: false,
                    isDeleting: false,
                    isUpdating: false
                },
                isAuthenticated: false,
                error: false,
                isdeconnecting: false
            };
        }

    },
    extraReducers: (builder) => {
        // **************************** Login ***************************** //
        builder.addCase(login.pending, (state) => {
            state.action.isLoading = true;
            state.error = false;
        })
            .addCase(login.fulfilled, (state, action: {
                payload: LoginResType
            }) => {
                state.action.isLoading = false;
                if (action.payload.error) {
                    state.isAuthenticated = false;
                    state.error = true;
                } else {
                    state.token = action.payload.token;
                    state.isAuthenticated = true;
                    state.error = false;

                    const decode = jwtDecode<TokenPayload>(action.payload.token)

                    state.userInfo.role = decode.roles;
                    state.userInfo.email = decode.username;

                    localStorage.setItem('token', action.payload.token)
                }
            })
            .addCase(login.rejected, (state) => {
                state.action.isLoading = false;
                state.error = true;
            })
    }
})

export const getAuthState = (state: RootStateType) => state.Auth
export const { testeAuthecation, deconnexion, toDeconnect } = AuthSlice.actions;
export default AuthSlice.reducer; 