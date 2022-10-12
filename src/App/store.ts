import { configureStore } from '@reduxjs/toolkit'
import userSlice from 'Reducers/userSlice'
import authSlice from 'Reducers/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
