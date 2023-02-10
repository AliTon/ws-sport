import React from 'react'
import { useSelector } from 'react-redux'

import { RegionDropdownMenuStyle } from '../styles/index.styled'
import { getRegionsByActiveGameSelector } from '../redux/selectors/gamesSelector'
import Region from '../../../components/Region'

const RegionDropdownMenu: React.FC = () => {
    const { regions = {} } = useSelector(getRegionsByActiveGameSelector)

    if (!regions) return null
    return (
        <RegionDropdownMenuStyle>
            <div className={'title'}>Countries</div>
            {Object.values(regions).map((region) => (
                <Region key={region.id} {...region} />
            ))}
        </RegionDropdownMenuStyle>
    )
}

export default RegionDropdownMenu
