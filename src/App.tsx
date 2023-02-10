import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout'
import { MainPage } from './modules/Games'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route
                        path="/:gameId/:regionId/:tournamentId"
                        element={<MainPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
