import React from 'react'
import {useSelector} from "react-redux";

import { TabMenuStyle } from '../styles/index.styled'
import {getGamesSelector} from "../redux/selectors/gamesSelector";

const TabMenu: React.FC = () => {
    const games = useSelector(getGamesSelector);
    return <TabMenuStyle>{games.map(g => g.name)}</TabMenuStyle>
}

export default TabMenu
