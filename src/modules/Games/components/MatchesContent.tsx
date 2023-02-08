import React from 'react'

import styled from 'styled-components'
import {useSelector} from "react-redux";
import {getActiveMatchesSelector} from "../redux/selectors/gamesSelector";


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
  .matche-item {
    background: #434656;
    border-radius: 0 8px 8px 0;
    width: 50%;
    height: 100px;
    border-bottom: 1px solid #292c3d;
    border-top: 1px solid #292c3d;
    color: #c4c7d4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const MatchesContent: React.FC = () => {

    const {matches = []} = useSelector(getActiveMatchesSelector);

    return (
        <MatchesContentStyle>
            <div className='matches-title'>
                <div>{matches[0]?.tournament?.name}</div>
                <div>{matches.length}</div>
            </div>
            {matches.map((match: { match_info: { score: any; }, away: {name: string}, home: {name: string} }) =>
                <div className='matche-item'>
                   <div>
                       {match.match_info.score}
                   </div>
                   <div>
                       {`${match.home.name} vs ${match.away.name}`}
                   </div>
                </div>
            )}
        </MatchesContentStyle>
    )
}

export default MatchesContent
