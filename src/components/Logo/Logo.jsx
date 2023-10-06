import React from 'react';
import style from './Logo.module.scss';
import LogoImg from '../../images/logo.svg?react';
import LogoImgMain from '../../images/logo-main.svg?react';

function Logo({ isLoggedIn }) {
  return (
    <div className={style.logo_container}>
      {
        isLoggedIn ?
          <LogoImgMain /> :
          <LogoImg />
      }
    </div>
  );
}

export default Logo;
