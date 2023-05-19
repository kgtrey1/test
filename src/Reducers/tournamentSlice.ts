import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'
import { NetworkError } from 'Services'
import { Object } from 'erise-types'
import makeAPIRequest from 'Utils/makeAPIRequest'

const getTournament = createAsyncThunk(
    '/GET_TOURNAMENT',
    async (payload, { rejectWithValue, fulfillWithValue }): Promise<any> => {
        try {
            const response = await makeAPIRequest('get', `/tournament`)
            return fulfillWithValue(response.data)
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.error)
        }
    },
)

interface TournamentState {
    data: Array<Object.Tournament> | undefined
    isLoading: boolean
    error: NetworkError | undefined
    success: boolean
}

const initialState: TournamentState = {
    data: undefined,
    isLoading: false,
    error: undefined,
    success: false,
}

export const tournamentSlice = createSlice({
    name: 'Tournament',
    initialState,
    reducers: {},
    extraReducers(builder: ActionReducerMapBuilder<TournamentState>) {
        builder.addCase(getTournament.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTournament.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.success = true
        })
        builder.addCase(getTournament.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.success = false
        })
    },
})

export { getTournament }
export default tournamentSlice.reducer
