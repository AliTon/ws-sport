import React from 'react'
import {MainPageStyle} from '../styles/index.styled'
import GamesTabMenu from '../components/GamesTabMenu'
import {useSelector} from "react-redux";
import {getLoadingState} from "../redux/selectors/gamesSelector";
import Loader from "../components/Loader";
import RegionDropdownMenu from '../components/RegionDropdownMenu';
import MatchesContent from '../components/MatchesContent';

const LiveGames = () => {
    const loading = useSelector(getLoadingState);

    return (
        <MainPageStyle>
            {
                !loading ? <>
                        <GamesTabMenu/>
                        <div className="content">
                            <RegionDropdownMenu/>
                            <MatchesContent/>
                        </div>
                    </>
                    :
                    <Loader/>
            }

        </MainPageStyle>
    )
}

export default LiveGames
