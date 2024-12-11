import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface userObject {
    [key: string]: string | null
}

interface UserState {
    user: userObject;
    loggedIn: boolean;
    token: string | null;
}

const initialState: UserState = {
    user: {
        name: null,
        email: null
    },
    loggedIn: false,
    token: null
}
interface payloadInterface {
    type: string;
    payload: { [key: string]: string | null }
}
/**
 * create the slice here now
 * to change the token, we user the state.token = something...
 * action carries the action.type and also action.payload
 * the reducers here are exported as action/triggers
 */

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<any>) => {
            state.user.name = action.payload.user
            state.user.email = action.payload.email
            state.token = action.payload.token
            state.loggedIn = true
            console.log(state.user.name)
            console.log(state.user.email)
        },
        logout: (state: UserState) => {
            state.user.name = null
            state.user.email = null
            state.token = null
            state.loggedIn = false
        },
        register: (state: UserState, action: PayloadAction<payloadInterface>) => {
            console.log(state)
            console.log(action)
            console.log("register the user")
        },
        checkAuth: (state: UserState): any => {
            return state.loggedIn
        }
    }
})

/***
 * export the actions, reducers and create a selector
 */

export const { login, logout, register,checkAuth } = userSlice.actions
/***
 * create a selector
 */
export const selectUser = (state: RootState) => state.user
/***
 * export the reducer now
 */

export default userSlice.reducer