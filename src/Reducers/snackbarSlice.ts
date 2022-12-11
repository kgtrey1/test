import { createSlice } from '@reduxjs/toolkit'

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        message: '',
        type: 'error',
        isOpen: false,
        duration: 3000,
        width: undefined,
    },
    reducers: {
        openSnackbar: (state, action) => {
            const { message, type, duration, width } = action.payload
            state.message = message
            state.type = type
            state.duration = duration
            state.isOpen = true
            state.width = width
        },
        closeSnackbar: (state) => {
            state.isOpen = false
        },
    },
})

export const snackbarActions = snackbarSlice.actions

export default snackbarSlice.reducer
