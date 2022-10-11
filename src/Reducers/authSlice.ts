import {
    ActionReducerMapBuilder,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { NetworkError } from 'Services'

interface LoginResponse {
    token: string
    refreshToken: string
}

const login = createAsyncThunk<
    LoginResponse,
    {
        email: string
        password: string
    },
    {
        rejectValue: NetworkError
    }
>('Auth/LOGIN', async (payload): Promise<LoginResponse> => {
    const response = await axios.post(
        'https://staging-api.erise.gg/auth/login',
        {
            mail: payload.email,
            password: payload.password,
        },
    )
    console.log(response.data)
    return response.data as LoginResponse
})

interface AuthState {
    token?: string
    refreshToken?: string
    isLoading: boolean
    error: NetworkError | undefined
    success: boolean
}

const initialState: AuthState = {
    token: undefined,
    refreshToken: undefined,
    isLoading: false,
    error: undefined,
    success: false,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {},
    extraReducers(builder: ActionReducerMapBuilder<AuthState>) {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload.token
            state.refreshToken = action.payload.refreshToken
            state.success = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
        })
    },
})

export { login }
export default authSlice.reducer
