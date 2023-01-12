import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'Interfaces/IUser'
import { Object } from 'erise-types'

interface IUserState {
    user?: IUser
    isLoading: boolean
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: undefined,
        isLoading: true,
    } as IUserState,
    reducers: {
        updateUser: (state: IUserState, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        setIsLoading: (state: IUserState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    },
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer
