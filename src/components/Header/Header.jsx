import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Header.module.scss';

function Header({ isLoggedIn }) {
  return (
    <header className={style.header}>
      {isLoggedIn ?
        (
          <>
          </>
        ) : (
          <div className={style.header__container}>
            <img src='../../images/logo.svg' className={style.header__image} al/>
            <h1 className={style.header__title}>
              Система прогнозирования спроса
            </h1>
          </div>
        )
      }
    </header>
  );
}

export default Header;
