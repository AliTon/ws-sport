import React from 'react'

import styled from 'styled-components'
import {useSelector} from "react-redux";
import {getActiveMatchesSelector} from "../redux/selectors/gamesSelector";


export const MatchesContentStyle = styled.div`
   
`

const MatchesContent: React.FC = () => {

    const {matches = []} = useSelector(getActiveMatchesSelector);

    return null
    // return (
    //    // <MatchesContentStyle>{matches.map((match: { match_info: { score: any; }; }) => <div>{match.match_info.score)}</MatchesContentStyle>
    // )
}

export default MatchesContent
