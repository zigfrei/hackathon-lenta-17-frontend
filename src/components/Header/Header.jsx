import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li>
                        <Link 
                            to="/firstroute"
                            className='header__link'
                        >
                            First Route
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/secondroute"
                            className='header__link'
                        >
                            Second Route
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/thirdroute"
                            className='header__link'
                        >
                            Third Route
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header