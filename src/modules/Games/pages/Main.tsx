import React from 'react'
import { MainPageStyle } from '../styles/index.styled'
import TabMenu from '../components/TabMenu'
import DropdownMenu from '../components/DropdownMenu'
import {useSelector} from "react-redux";
import {
    getActiveGameSelector,
    getActiveMatchesSelector,
    getActiveTournamentSelector
} from "../redux/selectors/gamesSelector";

const MainPage = () => {
    const activeGame = useSelector(getActiveGameSelector);
    const activeTournament = useSelector(getActiveTournamentSelector);
    const activeMatches  = useSelector(getActiveMatchesSelector(activeGame, activeTournament));

    console.log({activeMatches})
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
