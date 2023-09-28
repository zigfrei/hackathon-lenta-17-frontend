import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <ul className={style.header__list}>
          <li>
            <NavLink to='/firstroute' className={style.header__link}>
              First Route
            </NavLink>
          </li>
          <li>
            <NavLink to='/secondroute' className={style.header__link}>
              Second Route
            </NavLink>
          </li>
          <li>
            <NavLink to='/thirdroute' className={style.header__link}>
              Third Route
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
