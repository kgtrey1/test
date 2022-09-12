import { Games, Home, NotFound, Team, UserProfile } from 'Pages'
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
