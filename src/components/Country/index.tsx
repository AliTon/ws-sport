import React from 'react'
import { CountryStyle } from './index.styled'
import TournamentItem from './TournamentItem'

export interface ITurnament {
    name: string
    count: number
}

interface IProps {
    name?: string
    flag: string
}
const Country: React.FC<IProps> = ({ name, flag }) => {
    const [openState, setOpenState] = React.useState(false)
    const tournamentData: ITurnament[] = [
        { name: 'AAAA', count: 1 },
        { name: 'BBB', count: 2 },
        { name: 'CCC', count: 3 },
        { name: 'DDD', count: 4 },
    ]

    return (
        <>
            <CountryStyle onClick={() => setOpenState(!openState)}>
                <div>{flag}</div>
                <div>{name}</div>
                <div>4</div>
            </CountryStyle>
            {openState && (
                <div>
                    {tournamentData.map((item) => (
                        <TournamentItem item={item} key={item.name} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Country
