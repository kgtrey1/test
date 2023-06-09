import {
    ActionReducerMapBuilder,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { NetworkError } from 'Services'
import { Object } from 'erise-types'

const login = createAsyncThunk<
    Object.LoginReply,
    Object.LoginBody,
    {
        rejectValue: NetworkError
    }
>('Auth/LOGIN', async (payload, thunkAPI): Promise<any> => {
    const API_URL = process.env.REACT_APP_API_URL
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            mail: payload.mail,
            password: payload.password,
        })
        return thunkAPI.fulfillWithValue(response.data as Object.LoginReply)
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})

const register = createAsyncThunk<
    Object.RegisterReply,
    Object.RegisterBody,
    {
        rejectValue: NetworkError
    }
>('Auth/REGISTER', async (payload, thunkAPI): Promise<any> => {
    const API_URL = process.env.REACT_APP_API_URL
    try {
        const response = await axios.post(`${API_URL}/auth/register`, {
            mail: payload.mail,
            password: payload.password,
            username: payload.username,
            firstname: payload.firstname,
            lastname: payload.lastname,
        })
        return thunkAPI.fulfillWithValue(response.data as Object.RegisterReply)
    } catch (err: any) {
        return thunkAPI.rejectWithValue(err?.response?.data?.error)
    }
})

interface AuthState {
    token: string | undefined
    refreshToken?: string // Not supported
    isLoading: boolean
    error: NetworkError | undefined
    success: boolean
}

const tokenInStorage = localStorage.getItem('token')
const initialState: AuthState = {
    token: tokenInStorage ? tokenInStorage : undefined,
    refreshToken: undefined, // Not supported
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
            if ('authToken' in action.payload) {
                localStorage.setItem('token', action.payload.authToken)
                state.token = action.payload.authToken
            } else {
                localStorage.removeItem('token')
                state.token = undefined
            }
            state.success = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
            localStorage.removeItem('token')
        })
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            if ('authToken' in action.payload) {
                localStorage.setItem('token', action.payload.authToken)
                state.token = action.payload.authToken
            } else {
                localStorage.removeItem('token')
                state.token = undefined
            }
        })
        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
            state.token = undefined
            localStorage.removeItem('token')
        })
    },
})

export { login, register }
export default authSlice.reducer
