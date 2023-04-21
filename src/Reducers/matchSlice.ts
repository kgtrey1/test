import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit'
import { NetworkError } from 'Services'
import { Object } from 'erise-types'
import makeAPIRequest from 'Utils/makeAPIRequest'
import { useAppDispatch } from 'Hooks'

const getMatch = createAsyncThunk<
    Object.Match,
    Object.GetMatchHeader,
    {
        rejectValue: NetworkError
    }
>(
    '/GET_MATCH',
    async (payload, { rejectWithValue, fulfillWithValue }): Promise<any> => {
        try {
            const response = await makeAPIRequest(
                'get',
                `/matchs/${payload.id}`,
            )
            return fulfillWithValue(response.data)
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.error)
        }
    },
)

interface MatchPendingInfo {
    mode: string
    game: Object.Game
}

interface MatchProgressInfo {
    mode: string
    game: Object.Game
    opponent: Object.User
    match: Object.Match
}

const setMatchPending = createAsyncThunk<
    {
        matchPendingInfo: MatchPendingInfo
        socket: WebSocket
    },
    MatchPendingInfo,
    {
        rejectValue: NetworkError
    }
>(
    '/SET_MATCH_PENDING',
    async (payload, { rejectWithValue, fulfillWithValue }): Promise<any> => {
        try {
            const SERVER: string = process.env.REACT_APP_WEB_SOCKET_SERVER
                ? process.env.REACT_APP_WEB_SOCKET_SERVER
                : ''
            const ws = new WebSocket(SERVER)
            ws.onopen = () => {
                ws?.send(
                    JSON.stringify({
                        id: 3001,
                        token: localStorage.getItem('token'),
                        gameId: 'rocketLeague',
                        gameModeId: '1v1',
                        matchType: 'match',
                    }),
                )
            }
            return fulfillWithValue({
                matchPendingInfo: payload,
                socket: ws,
            })
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.error)
        }
    },
)

const setMatchInProgress = createAsyncThunk<
    MatchProgressInfo,
    MatchProgressInfo,
    {
        rejectValue: NetworkError
    }
>(
    '/SET_MATCH_IN_PROGRESS',
    async (payload, { rejectWithValue, fulfillWithValue }): Promise<any> => {
        try {
            return fulfillWithValue(payload)
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.error)
        }
    },
)

interface MatchState {
    socket?: WebSocket
    matchPending?: MatchPendingInfo
    matchInProgress?: MatchProgressInfo
    loading: {
        matchPending: boolean
        matchInProgress: boolean
    }
}

const initialState: MatchState = {
    socket: undefined,
    matchPending: undefined,
    matchInProgress: undefined,
    loading: {
        matchPending: false,
        matchInProgress: false,
    },
}

export const matchSlice = createSlice({
    name: 'Match',
    initialState,
    reducers: {
        closeMatchPeding: (state) => {
            state.matchPending = undefined
            state.loading.matchPending = false
            state.socket = undefined
        },
        closeInProgressMatch: (state) => {
            state.matchInProgress = undefined
            state.loading.matchInProgress = false
            state.socket = undefined
        },
        setEndOfGame: (state) => {
            state.matchPending = undefined
            state.loading.matchPending = false
            state.socket = undefined
            state.matchInProgress = undefined
            state.loading.matchInProgress = false
        },
    },
    extraReducers(builder: ActionReducerMapBuilder<MatchState>) {
        builder.addCase(setMatchPending.pending, (state) => {
            state.loading.matchPending = true
            state.matchInProgress = undefined
            state.matchPending = undefined
        })
        builder.addCase(setMatchPending.fulfilled, (state, action) => {
            state.loading.matchPending = false
            state.socket = action.payload.socket as any
            state.matchPending = action.payload.matchPendingInfo as any
        })
        builder.addCase(setMatchPending.rejected, (state, action) => {
            state.loading.matchPending = false
        })
        builder.addCase(setMatchInProgress.pending, (state) => {
            state.loading.matchInProgress = true
            state.matchInProgress = undefined
            state.matchPending = undefined
        })
        builder.addCase(setMatchInProgress.fulfilled, (state, action) => {
            state.loading.matchInProgress = false
            state.matchInProgress = action.payload as any
        })
        builder.addCase(setMatchInProgress.rejected, (state, action) => {
            state.loading.matchInProgress = false
        })
    },
})

export const matchActions = matchSlice.actions
export default matchSlice.reducer
export { getMatch, setMatchInProgress, setMatchPending }
