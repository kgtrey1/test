import { AlertColor } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'Hooks'
import MySnackbar from 'Lib/Snackbars/MySnackbar'
import { Games, Home, NotFound, Team, UserProfile } from 'Pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { snackbarActions } from 'Reducers/snackbarSlice'

const App: React.FunctionComponent = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const snackbarReducer = useAppSelector((state) => state.snackbar)

    return (
        <>
            <MySnackbar
                isOpen={snackbarReducer?.isOpen}
                message={snackbarReducer?.message}
                duration={snackbarReducer?.duration}
                width={snackbarReducer?.width}
                type={snackbarReducer?.type as AlertColor}
                onClose={() => dispatch(snackbarActions.closeSnackbar())}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/games' element={<Games />} />
                <Route path='/team' element={<Team />} />
                <Route path='*' element={<NotFound />} />
                <Route
                    path='/userProfile'
                    element={
                        <UserProfile
                            username='Joueur1'
                            bio='Je suis un gamer!'
                            email='joueur1@gaming.gg'
                        />
                    }
                />
            </Routes>
        </>
    )
}

export default App
