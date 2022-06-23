import { Games, Home, NotFound, Team } from 'Pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App: React.FunctionComponent = (): JSX.Element => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/team' element={<Team />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
