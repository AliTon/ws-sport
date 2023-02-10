import React from 'react'
import {useSelector} from "react-redux";

import {getActiveMatchesSelector} from "../redux/selectors/gamesSelector";
import {IMatch} from "../interfaces";
import MatchItem from "./MatchItem";
import { MatchesContentStyle } from '../styles/index.styled';


const MatchesContent: React.FC = () => {

    const {matches = {}} = useSelector(getActiveMatchesSelector);
    const matchesArray: IMatch[] = Object.values(matches);

    return (
        <MatchesContentStyle>
            <div className='matches-title'>
                <div>{matchesArray[0]?.tournament?.name}</div>
                <div>{matchesArray.length}</div>
            </div>
            {matchesArray.map((match: IMatch) => (
               <MatchItem {...match} key={match._id}/>
            ))}
        </MatchesContentStyle>
    )
}

export default MatchesContent
