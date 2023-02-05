import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import { MainPage } from './modules/Games'
import SportSocket from './modules/Games/service/SportSocket'
import parseMatches from './parser'

const client = new SportSocket('FF32862C-84F7-1276-CC06-ashkdhsa')

// Sport -> Region -> Tournament -> Game

client.onGettingMatches = (data: any) => {
    console.log(data, 'ekel e ')
    const parsed = parseMatches(data)
    console.log(parsed)
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
