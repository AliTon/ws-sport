import React, { useState } from 'react'
import styled from 'styled-components'
import {IMatch} from "../interfaces";

const MatchesItemStyle = styled.div<{highlight: boolean}>`
  background: #434656;
  border-radius: 0 8px 8px 0;
  width: 50%;
  min-height: 100px;
  border-bottom: 1px solid #292c3d;
  border-top: 1px solid #292c3d;
  color: #c4c7d4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .score {
    color: ${props => props.highlight ? 'red' : 'white'};
  }
`

const MatchItem: React.FC<IMatch> = ({match_info, home, away, status}) => {
    const [highlight, setHighlight] = useState(false)
    const [prevScore, setPrevScore] = useState(match_info)

    if (prevScore !== match_info) {
        setHighlight(true)
        setTimeout(() => setHighlight(false), 3000)
        setPrevScore(match_info)
    }

    return (
        <MatchesItemStyle highlight={highlight}>
            <div className='score'>
                <p>score: {match_info?.score}</p>
                <p>Scores : {match_info?.scores?.map(({score, period}) => <p>{period} - {score}</p>)}</p>
            </div>
            <div>
                {`${home.name} vs ${away.name}`}<br/>
                <i>Status: {status?.name}</i>
            </div>
        </MatchesItemStyle>
    )
}

export default MatchItem
