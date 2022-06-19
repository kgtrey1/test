import React from 'react'
import { Home, NotFound } from 'Pages'
import { Route, Routes } from 'react-router-dom'

const App: React.FunctionComponent = (): JSX.Element => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
)

export default App
