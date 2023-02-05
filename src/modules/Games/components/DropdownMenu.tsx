import React from 'react'
import Country from '../../../components/Country'
import { DropdownMenuStyle } from '../styles/index.styled'
import {useSelector} from "react-redux";
import {getRegionsByGameSelector} from "../redux/selectors/gamesSelector";

const DropdownMenu: React.FC = () => {
    const {regions = []} = useSelector(getRegionsByGameSelector("Cricket"));

    return (
        <DropdownMenuStyle>
            <div className={'title'}>Countries</div>
            {regions.map((region: { name: string | undefined; }) =>
                <div key={region.name}>
                    <Country name={region.name} data={region}/>
                </div>)}
        </DropdownMenuStyle>
    )
}

export default DropdownMenu
