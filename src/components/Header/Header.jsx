import { NavLink } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li>
                        <NavLink 
                            to="/firstroute"
                            className='header__link'
                        >
                            First Route
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/secondroute"
                            className='header__link'
                        >
                            Second Route
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/thirdroute"
                            className='header__link'
                        >
                            Third Route
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header