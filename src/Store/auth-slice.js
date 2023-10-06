import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAutenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        loggin(state) {
            state.isAutenticated = true;
        },
        logout(state) {
            state.isAutenticated = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
