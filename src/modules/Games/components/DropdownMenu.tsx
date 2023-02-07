import React from 'react'
import Country from '../../../components/Country'
import { DropdownMenuStyle } from '../styles/index.styled'
import {useSelector} from "react-redux";
import {getActiveGameSelector, getRegionsByGameSelector} from "../redux/selectors/gamesSelector";

const DropdownMenu: React.FC = () => {
    const activeGame = useSelector(getActiveGameSelector)
    const {regions = []} = useSelector(getRegionsByGameSelector(activeGame));

    return (
        <DropdownMenuStyle>
            <div className={'title'}>Countries</div>
            {regions.map((region: {
                count: number;
                tournamentMap: any;
                name: string | undefined; }) =>
                <div key={region.name}>
                    <Country name={region.name} count={region.count} tournaments={region.tournamentMap}/>
                </div>)}
        </DropdownMenuStyle>
    )
}

export default DropdownMenu
