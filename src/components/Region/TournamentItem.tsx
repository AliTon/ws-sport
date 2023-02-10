import React from 'react'
import { TournamentItemStyle } from './index.styled'
import {useDispatch, useSelector} from "react-redux";
// import {changeActiveTournament} from "../../modules/Games/redux/slices/gamesSlice";
import {ITournament} from "../../modules/Games/interfaces";
import {useNavigate} from "react-router-dom";
import {getActiveGameSelector} from "../../modules/Games/redux/selectors/gamesSelector";
import {changeActiveTournament} from "../../modules/Games/redux/slices/gamesSlice";

const TournamentItem: React.FC<ITournament & {regionId: string}> = ({id, name, matchesCount, regionId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeSportId = useSelector(getActiveGameSelector);

    const handleChangeActiveTournament = () => {
        navigate(`/${activeSportId}/${regionId}/${id}`)
        dispatch(changeActiveTournament({id, regionId}));

    }

    return (
        <TournamentItemStyle>
            <div onClick={handleChangeActiveTournament}>
                <p className="tournamentItem_star"><i className="fa-regular fa-star"></i></p>
                <p title={name} className="tournamentItem_name ellipsis-text">{name}</p>
                <p className="tournamentItem_count">{matchesCount}</p>
            </div>

        </TournamentItemStyle>
    )
}

export default TournamentItem
