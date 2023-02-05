import React from 'react'
import { MainPageStyle } from '../styles/index.styled'
import TabMenu from '../components/TabMenu'
import DropdownMenu from '../components/DropdownMenu'

const MainPage = () => {
    return (
        <MainPageStyle>
            <TabMenu />
            <div className="content">
                <DropdownMenu />
                <div>Content</div>
            </div>
        </MainPageStyle>
    )
}

export default MainPage
