import { createAsyncThunk } from '@reduxjs/toolkit'
import { NetworkError } from 'Services'
import { Object } from 'erise-types'
import makeAPIRequest from 'Utils/makeAPIRequest'

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

export { getMatch }
