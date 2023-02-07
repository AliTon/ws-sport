import React from 'react'
import {useSelector} from "react-redux";

import { RegionDropdownMenuStyle } from '../styles/index.styled'
import {
    getActiveGameSelector,
    getRegionsByActiveGameSelector,
} from "../redux/selectors/gamesSelector";
import Region from "../../../components/Region";
import {IRegion} from "../interfaces";

const RegionDropdownMenu: React.FC = () => {
    const {regions }: Record<string, IRegion> = useSelector(getRegionsByActiveGameSelector);

    if(!regions) return null
    return (
        <RegionDropdownMenuStyle>
            <div className={'title'}>Countries</div>
            {Object.values(regions).map((region) => <Region {...region}  />)}
        </RegionDropdownMenuStyle>
    )
}

export default RegionDropdownMenu
