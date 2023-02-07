import React from 'react'
import { TournamentItemStyle } from './index.styled'
import {useDispatch} from "react-redux";
import {changeActiveTournament} from "../../modules/Games/redux/slices/gamesSlice";
import {ITournament} from "../../modules/Games/interfaces";

const TournamentItem: React.FC<ITournament & {regionId: string}> = ({id, name, matchesCount, regionId}) => {
    const dispatch = useDispatch();

    return (
        <TournamentItemStyle>
            <div onClick={() => dispatch(changeActiveTournament({id, regionId}))}>
                <div>{name}</div>
                <div>{matchesCount}</div>
            </div>

        </TournamentItemStyle>
    )
}

export default TournamentItem
