import { configureStore } from '@reduxjs/toolkit'
import userSlice from 'Reducers/userSlice'
import authSlice from 'Reducers/authSlice'
import snackbarSlice from 'Reducers/snackbarSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        snackbar: snackbarSlice,
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
