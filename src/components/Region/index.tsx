import React from 'react'
import {RegionStyle} from './index.styled'
import TournamentItem from './TournamentItem'
import {IRegion, ITournament} from "../../modules/Games/interfaces";

const Region: React.FC<IRegion> = ({ name, tournaments, matchesCount, id }) => {
    const [openState, setOpenState] = React.useState(false)
    // console.log(tournaments.values(), "tournaments")

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // const values = [...tournaments.values()];

    // console.log(values)

    return (
        <>
            <RegionStyle onClick={() => setOpenState((state) =>!state)}>
                <div className='region_name'>{name}</div>
                <div className='region_tournament_count'>{matchesCount}</div>
            </RegionStyle>
            {openState && (
                <div>
                    {Object.values(tournaments).map((tournament: ITournament) => (
                        <TournamentItem {...tournament} regionId={id}  />
                    ))}
                </div>
            )}
        </>
    )
}

export default Region
