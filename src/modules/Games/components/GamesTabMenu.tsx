import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { GamesTabMenuStyle, TabItemStyle } from '../styles/index.styled'
import {getActiveGameSelector, getGamesSelector} from '../redux/selectors/gamesSelector';

import {changeActiveGame} from "../redux/slices/gamesSlice";
import {IconClassNameGenerator} from "../../../utils";
import {useNavigate} from "react-router-dom";
import {ISport} from "../interfaces";


const GamesTabMenu: React.FC = () => {
    const dispatch  = useDispatch();
    const games = useSelector(getGamesSelector)
    const activeGame = useSelector(getActiveGameSelector);

    const navigate = useNavigate();

    const handleSportChange = (game: ISport) => {
        const {id, regions } = game;
        const regionId = Object.keys(regions)[0];
        const tournamentId = Object.keys(regions[regionId]?.tournaments)[0];
        dispatch(changeActiveGame({id, regionId, tournamentId}));
        navigate(`/${id}/${regionId}/${tournamentId}`)
    }


    return (
        <GamesTabMenuStyle>
            {Object.values(games).map((game) =>  (
                    <TabItemStyle
                        active={activeGame === game.id}
                        onClick={() => handleSportChange(game)}
                    >
                        <div className="tabDescription_count">{game.matchesCount}</div>
                        <div className="tabDescription_name_icon">
                            <div>
                                <i className={IconClassNameGenerator(game.name)}></i>
                            </div>
                            <div>{game.name}</div>
                        </div>
                    </TabItemStyle>
                )
            )}
        </GamesTabMenuStyle>
    )
}

export default GamesTabMenu
