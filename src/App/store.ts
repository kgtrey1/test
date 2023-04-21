import { configureStore } from '@reduxjs/toolkit'
import userSlice from 'Reducers/userSlice'
import authSlice from 'Reducers/authSlice'
import snackbarSlice from 'Reducers/snackbarSlice'
import matchSlice from 'Reducers/matchSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        snackbar: snackbarSlice,
        match: matchSlice,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
