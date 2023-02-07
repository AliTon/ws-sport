import React from 'react'
import { TournamentItemStyle } from './index.styled'
import { ITurnament } from '.'
import {useDispatch} from "react-redux";
import {changeActiveTournament} from "../../modules/Games/redux/slices/gamesSlice";

interface IProps {
    value: any
}
const TournamentItem: React.FC<IProps> = ({value}) => {
    const dispatch = useDispatch();

    // console.log(value, "------- item")

    return (
        <TournamentItemStyle>
            <div onClick={() => dispatch(changeActiveTournament(value.id))}>
                <div>{value.name}</div>
                <div>{value.count}</div>
            </div>

        </TournamentItemStyle>
    )
}

export default TournamentItem
