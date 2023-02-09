import React from 'react'

import styled from 'styled-components'
import {useSelector} from "react-redux";
import {getActiveMatchesSelector} from "../redux/selectors/gamesSelector";
import {IMatch} from "../interfaces";
import MatchItem from "./MatchItem";


export const MatchesContentStyle = styled.div`
  width: 100%;
  margin-right: 20px;
  border-radius: 8px;
  background-color: #363949;
  .matches-title {
    background-color: #363949;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 40px;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #292c3d;
    padding: 0 8px;
  }
`

const MatchesContent: React.FC = () => {

    const {matches = {}} = useSelector(getActiveMatchesSelector);
    console.log(matches);

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
