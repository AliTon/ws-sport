import React from 'react'
import Country from '../../../components/Country'
import { DropdownMenuStyle } from '../styles/index.styled'

const DropdownMenu: React.FC = () => {
    return (
        <DropdownMenuStyle>
            <div className={'title'}>Countries</div>
            <Country name={'Armenia'} flag={'Arm'} />
            <Country name={'Russia'} flag={'Rus'} />
        </DropdownMenuStyle>
    )
}

export default DropdownMenu
