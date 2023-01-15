import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'
import { Object } from 'erise-types'
import { NetworkError } from 'Services'
import makeAPIRequest from 'Utils/makeAPIRequest'

const getUser = createAsyncThunk('/USER', async (): Promise<Object.User> => {
    const response = await makeAPIRequest('get', '/user')
    return response.data as Object.User
})

interface UserState {
    user: Object.User | undefined
    isLoading: boolean
    error: NetworkError | undefined
    success: boolean
}

const initialState: UserState = {
    user: undefined,
    isLoading: false,
    error: undefined,
    success: false,
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers(builder: ActionReducerMapBuilder<UserState>) {
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.success = true
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
        })
    },
})

export { getUser }

export default userSlice.reducer
