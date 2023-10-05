import { NavLink, useLocation } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';

function Header() {

  const location = useLocation().pathname;

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <Logo />
        <h1 className={
          location === '/' ?
          style.header__title :
          style.header__title_main
          }>
          Система прогнозирования спроса
        </h1>
      </div>
    </header>
  );
}

export default Header;
