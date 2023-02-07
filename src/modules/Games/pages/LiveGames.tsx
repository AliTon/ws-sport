import React from 'react'
import { MainPageStyle } from '../styles/index.styled'
import GamesTabMenu from '../components/GamesTabMenu'
import RegionDropdownMenu from '../components/RegionDropdownMenu'
import MatchesContent from "../components/MatchesContent";

const LiveGames = () => {
    return (
        <MainPageStyle>
            <GamesTabMenu />
            <div className="content">
                <RegionDropdownMenu />
                <MatchesContent/>
            </div>
        </MainPageStyle>
    )
}

export default LiveGames
