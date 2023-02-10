import React from 'react'
import {RegionStyle, ArrowStyle} from './index.styled'
import TournamentItem from './TournamentItem'
import {IRegion, ITournament} from "../../modules/Games/interfaces";
import {useParams} from "react-router-dom";

const Region: React.FC<IRegion> = ({ name, tournaments, matchesCount, id }) => {
    const {regionId} = useParams();
    const [openState, setOpenState] = React.useState(regionId === id);

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
                        <TournamentItem {...tournament} regionId={id} key={tournament.id}  />
                    ))}
                </div>
            )}
        </>
    )
}

export default Region
