import { HeaderStyle } from './Header.styles'
import Logo from '../../images/icon.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderStyle>
            <Link to={'/'}>
                <img src={Logo} alt="Logo" height="60px" />
            </Link>
            <div className="title">Technamin test-task</div>
        </HeaderStyle>
    )
}

export default Header
