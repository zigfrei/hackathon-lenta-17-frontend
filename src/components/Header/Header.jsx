import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';

function Header() {

  const [isLogged, setIsLogged] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    location === '/' ?
    setIsLogged(false) :
    setIsLogged(true)
  }, [])

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <Logo
          isLoggedIn={isLogged}
        />
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
