import React from 'react'
import { TournamentItemStyle } from './index.styled'
import { ITurnament } from '.'

interface IProps {
    item: ITurnament
}
const TournamentItem: React.FC<IProps> = (item) => {
    console.log(item.item)

    return (
        <TournamentItemStyle>
            <div>{item.item.name}</div>
            <div>{item.item.count}</div>
        </TournamentItemStyle>
    )
}

export default TournamentItem
