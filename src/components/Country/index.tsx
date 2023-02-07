import React from 'react'
import { CountryStyle } from './index.styled'
import TournamentItem from './TournamentItem'

export interface ITurnament {
    name: string
    count: number
}

interface IProps {
    name?: string,
    tournaments: any,
    count: number
}
const Country: React.FC<IProps> = ({ name, tournaments, count }) => {
    const [openState, setOpenState] = React.useState(false)
    // console.log(tournaments.values(), "tournaments")

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const values = [...tournaments.values()];

    // console.log(values)

    return (
        <>
            <CountryStyle onClick={() => setOpenState((state) =>!state)}>
                <div className='region_name'>{name}</div>
                <div className='region_tournament_count'>{count}</div>
            </CountryStyle>
            {openState && (
                <div>
                    {values.map((value: ITurnament) => (
                        <TournamentItem value={value} key={value.name} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Country
