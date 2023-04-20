import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'
import { Object } from 'erise-types'
import { NetworkError } from 'Services'
import makeAPIRequest from 'Utils/makeAPIRequest'

const updateUser = createAsyncThunk<
    Object.User,
    Partial<Object.User>,
    {
        rejectValue: NetworkError
    }
>(
    '/UPDATE_USER',
    async (payload, { rejectWithValue, fulfillWithValue }): Promise<any> => {
        try {
            const response = await makeAPIRequest('put', '/user', payload)
            return fulfillWithValue(response.data)
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.error)
        }
    },
)

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
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            state.isLoading = false
            state.user = undefined
            state.error = undefined
        },
    },
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

        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.success = true
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
        })
    },
})

export const { logout } = userSlice.actions

export { getUser, updateUser }

export default userSlice.reducer
