import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Header.module.scss';
import LogoExtraSmallWhite from '../LogoExtraSmallWhite/LogoExtraSmallWhite';

function Header({ isLoggedIn }) {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <LogoExtraSmallWhite />
        <h1 className={style.header__title}>
          Система прогнозирования спроса
        </h1>
      </div>
    </header>
  );
}

export default Header;
