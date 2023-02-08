import React from 'react'

import styled from 'styled-components'
import {useSelector} from "react-redux";
import {getActiveMatchesSelector} from "../redux/selectors/gamesSelector";


export const MatchesContentStyle = styled.div`
   background-color: red;
`

const MatchesContent: React.FC = () => {

    const {matches = []} = useSelector(getActiveMatchesSelector);

    console.log(matches, ">>>>>>>>>>>>>>>>>>> matches")

    return (
        <MatchesContentStyle>
            {matches.map((match: { match_info: { score: any; }; }) => <div>{match.match_info.score}</div>)}
        </MatchesContentStyle>
    )
}

export default MatchesContent
