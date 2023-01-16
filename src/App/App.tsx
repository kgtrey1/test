import { AlertColor } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'Hooks'
import MySnackbar from 'Lib/Snackbars/MySnackbar'
import MobileUPEdit from 'Lib/UserProfile/MobileUserProfile/MobileUPEdit'
import { Games, Home, NotFound, Team, UserProfile } from 'Pages'
import GameDetails from 'Pages/GameDetails/GameDetails'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { snackbarActions } from 'Reducers/snackbarSlice'
import { getUser } from 'Reducers/userSlice'

const useAuth = () => {
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(getUser())
    }, [])
}

const AppSnackbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const snackbarReducer = useAppSelector((state) => state.snackbar)

    return (
        <MySnackbar
            isOpen={snackbarReducer?.isOpen}
            message={snackbarReducer?.message}
            duration={snackbarReducer?.duration}
            width={snackbarReducer?.width}
            type={snackbarReducer?.type as AlertColor}
            onClose={() => dispatch(snackbarActions.closeSnackbar())}
        />
    )
}

const App: React.FunctionComponent = (): JSX.Element => {
    useAuth()
    return (
        <>
            <AppSnackbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/games' element={<Games />} />
                <Route path='/team' element={<Team />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/userProfile' element={<UserProfile />} />
                <Route
                    path='/games/rocketleague'
                    element={
                        <GameDetails
                            imageURL={
                                'https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-2021-11-30t111613-030.jpg'
                            }
                            description={
                                'Lol is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine..'
                            }
                            modes={['solo', 'duo', 'trio', 'squad']}
                        />
                    }
                />
                <Route path='/userProfile/edit' element={<MobileUPEdit />} />
            </Routes>
        </>
    )
}

export default App
