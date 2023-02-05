import React from 'react'
import { CountryStyle } from './index.styled'
import TournamentItem from './TournamentItem'

export interface ITurnament {
    name: string
    count: number
}

interface IProps {
    name?: string,
    data: any,
}
const Country: React.FC<IProps> = ({ name, data }) => {
    const [openState, setOpenState] = React.useState(false)
    const entries = [...data.tournamentMap.entries()];
    console.log(entries, ">>>>>>>>>>>>>>>>>> DATA")


    return (
        <>
            <CountryStyle onClick={() => setOpenState(!openState)}>
                <div>flag</div>
                <div>{name}</div>
                <div>{data.count}</div>
            </CountryStyle>
            {openState && (
                <div>
                    {entries.map((item: ITurnament[]) => (
                        <TournamentItem item={item[1]} key={item[1].name} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Country
