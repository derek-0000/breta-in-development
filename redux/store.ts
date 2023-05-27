'use client'
import { configureStore } from '@reduxjs/toolkit'
import  userSesionSlice  from './features/userSesionSlice'
export const store = configureStore({
  reducer: {
    userSesion:userSesionSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch