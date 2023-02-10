import React, { useState } from 'react'
import { IMatch } from '../interfaces'
import { MatchesItemStyle } from '../styles/index.styled'

const MatchItem: React.FC<IMatch> = ({ match_info, home, away, status }) => {
    const [highlight, setHighlight] = useState(false)
    const [prevScore, setPrevScore] = useState(match_info)

    if (
        prevScore?.time !== match_info?.time ||
        prevScore?.scores !== match_info?.scores
    ) {
        setHighlight(true)
        setTimeout(() => setHighlight(false), 3000)
        setPrevScore(match_info)
    }

    return (
        <MatchesItemStyle highlight={highlight}>
            <div className="matchesItem_title">{`${home.name} vs ${away.name}`}</div>
            <br />
            <div className="updated_values">
                <div className="matchesItem_score">
                    <i>score:</i>
                    <div>{match_info?.score || '---:---'}</div>
                </div>
                <div className="matchesItem_scores">
                    <i>Scores: </i>
                    <div className="matchesItem_scores_item">
                        {match_info?.scores?.map(({ score, period }) => (
                            <div key={period}>
                                {period} - {score}
                            </div>
                        )) || '---:---'}
                    </div>
                </div>
            </div>
            <div className="matchesItem_date_status">
                <div>
                    <i>Status: {status?.name}</i>
                </div>
                <div className="matchesItem_time">
                    Time: <div>{match_info?.time || '---:---'}</div>
                </div>
            </div>
        </MatchesItemStyle>
    )
}

export default MatchItem
