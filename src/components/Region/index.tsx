import React from 'react'
import {RegionStyle, ArrowStyle} from './index.styled'
import TournamentItem from './TournamentItem'
import {IRegion, ITournament} from "../../modules/Games/interfaces";

const Region: React.FC<IRegion> = ({ name, tournaments, matchesCount, id }) => {
    const [openState, setOpenState] = React.useState(false);

    return (
        <>
            <RegionStyle state={openState} onClick={() => setOpenState((state) =>!state)}>
                <div className='region_name ellipsis-text'>{name}</div>
                <div className='region_tournament_count'>{matchesCount}</div>
                <ArrowStyle state={openState}>
                  <div/>
                </ArrowStyle>

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
