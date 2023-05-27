'use client'
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

const initialState = {
    
}

export const userSesionSlice = createSlice({
    name:'userSesion',
    initialState,
    reducers:{
        setUserSesion:(state, action:PayloadAction)=>{

        }
    }
})

export const { setUserSesion } = userSesionSlice.actions

export default userSesionSlice.reducer