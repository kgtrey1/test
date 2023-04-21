import { AlertColor } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'Hooks'
import MySnackbar from 'Lib/Snackbars/MySnackbar'
import UserProfileEdit from 'Lib/UserProfile/UserProfileEdit'
import { Games, Home, NotFound, Team, UserProfile } from 'Pages'
import EndOfGame from 'Pages/EndOfGame/EndOfGame'
import GameDetails from 'Pages/GameDetails/GameDetails'
import GamesStats from 'Pages/GameDetails/GameStats/GameStats'
import Policy from 'Pages/Policy/Policy'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { snackbarActions } from 'Reducers/snackbarSlice'
import { getUser } from 'Reducers/userSlice'

const useAuth = () => {
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(getUser())
            .unwrap()
            .then(() => {
                return
            })
            .catch((err) => {
                /*
                dispatch(
                    snackbarActions.openSnackbar({
                        type: 'error',
                        message: 'Cannot get user informations',
                    }),
                )
                */
            })
    }, [dispatch, snackbarActions])
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
                <Route path='/end_of_game/:matchId' element={<EndOfGame />} />
                <Route path='/games' element={<Games />} />
                <Route
                    path='/team'
                    element={
                        <Team
                            teams={[
                                {
                                    name: 'marksman',
                                    description:
                                        'Rocket League e-sport team! 3 times world champions!',
                                    pictureURL:
                                        'https://i.pinimg.com/736x/f3/ae/65/f3ae65f670ef9c745e2f78fb5f130ff9.jpg',
                                },
                            ]}
                        />
                    }
                />
                <Route path='*' element={<NotFound />} />
                <Route path='/userProfile' element={<UserProfile />} />
                <Route path='/Policy' element={<Policy />} />
                <Route path='/userProfile/edit' element={<UserProfileEdit />} />
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
                            modes={['1v1', '2v2', '3v3', '4v4']}
                        />
                    }
                />
                <Route
                    path='/games/rocketleague/123'
                    element={<GamesStats />}
                />
            </Routes>
        </>
    )
}

export default App
