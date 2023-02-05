import React from 'react';
import {useDispatch} from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/MainLayout'
import { MainPage } from './modules/Games'
import {initGameSocket} from "./modules/Games/redux/actions/gamesActions";


function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(initGameSocket())
    }, [dispatch]);


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
