import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { GamesTabMenuStyle } from '../styles/index.styled'
import {getActiveGameSelector, getGamesSelector} from '../redux/selectors/gamesSelector';

import styled from 'styled-components'
import {changeActiveGame} from "../redux/slices/gamesSlice";
import {IconClassNameGenerator} from "../../../utils";
import {useNavigate} from "react-router-dom";
import {ISport} from "../interfaces";
interface StyledTabProps {
    active: boolean
}

export const TabItemStyle = styled.div<StyledTabProps>`
    color: ${(props) => (props.active ? '#3CEFE4' : '#8F92A3')};
    font-weight: normal;
    border-radius: ${(props) => (props.active ? '8px' : '')};
    background: ${(props) => (props.active ? '#363949' : '')};
    width: 120px;
    height: 70px;
    padding: 4px 8px 8px 8px;
    box-shadow: ${(props) =>
        props.active ? '0 4px 16px rgba(0, 0, 0, 0.25)' : ''};
    .tabDescription_count {
        display: flex;
        justify-content: end;
        font-size: 12px;
    }
    .tabDescription_name_icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &:hover .tabDescription_name_icon {
        color: ${(props) => (props.active ? '#3CEFE4' : '#ffffff')};
        cursor: pointer;
        transition: 0.6s;
    }
`

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
