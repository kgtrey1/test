import { Games, Home, NotFound, Team, UserProfile } from 'Pages'
import GameDetails from 'Pages/GameDetails/GameDetails'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App: React.FunctionComponent = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/team' element={<Team />} />
            <Route path='*' element={<NotFound />} />
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
    )
}

export default App
