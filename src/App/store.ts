import { configureStore } from '@reduxjs/toolkit'
import userSlice from 'Reducers/userSlice'
import devToolsEnhancer from 'remote-redux-devtools'

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    enhancers:
        process.env.NODE_ENV === 'development'
            ? [
                  devToolsEnhancer({
                      realtime: true,
                      name: 'ERISE ',
                      hostname: 'localhost',
                      port: 8000,
                  }),
              ]
            : [],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
