import Header from '../Header'
import { Outlet, useParams } from 'react-router-dom'
import { StyledMainLayout } from './MainLayout.styles'
import { useDispatch } from 'react-redux'
import React from 'react'
import { initGameSocketAction } from '../../modules/Games/redux/actions/gamesActions'

const MainLayout = () => {
    const dispatch = useDispatch()
    const params = useParams()

    React.useEffect(() => {
        dispatch(initGameSocketAction(params))
    }, [dispatch, params])

    return (
        <StyledMainLayout>
            <Header />
            <Outlet />
        </StyledMainLayout>
    )
}

export default MainLayout
