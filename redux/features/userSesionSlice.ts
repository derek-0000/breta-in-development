'use client'
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

export interface User{
    username:string,
    email:string,
    token?:string
}

const initialState:User = {
    username:"",
    email:""
}

export const userSesionSlice = createSlice({
    name:'userSesion',
    initialState,
    reducers:{
        setUserSesion:(state, action:PayloadAction<User>)=>{
            const user:User = action.payload;
            state = user;
        }
    }
})

export const { setUserSesion } = userSesionSlice.actions

export default userSesionSlice.reducer