import {
    ActionReducerMapBuilder,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import api, { NetworkError } from 'Services'

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
    const resp = await api.post('login', payload)

    return resp.data as LoginResponse
})

interface AuthState {
    token?: string
    refreshToken?: string
    isLoading: boolean
    error: NetworkError | undefined
}

const initialState: AuthState = {
    token: undefined,
    refreshToken: undefined,
    isLoading: false,
    error: undefined,
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
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    },
})

export { login }
export default authSlice.reducer
