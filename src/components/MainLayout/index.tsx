import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { StyledMainLayout } from './MainLayout.styles'

const MainLayout = () => {
    return (
        <StyledMainLayout>
            <Header />
            <Outlet />
        </StyledMainLayout>
    )
}

export default MainLayout
