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
    return response.data as LoginResponse
})

interface RegisterResponse {
    token: string
    refreshToken: string
}

const register = createAsyncThunk<
    RegisterResponse,
    {
        mail: string
        password: string
        username: string
        firstname: string
        lastname: string
    },
    {
        rejectValue: NetworkError
    }
>('Auth/REGISTER', async (payload): Promise<RegisterResponse> => {
    const response = await axios.post(
        'https://staging-api.erise.gg/auth/register',
        {
            mail: payload.mail,
            password: payload.password,
            username: payload.username,
            firstname: payload.firstname,
            lastname: payload.lastname,
        },
    )
    return response.data as RegisterResponse
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
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload.token
            state.refreshToken = action.payload.refreshToken
            state.success = true
        })
        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
        })
    },
})

export { login, register }
export default authSlice.reducer
