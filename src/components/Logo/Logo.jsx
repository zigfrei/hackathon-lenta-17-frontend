import React from 'react';
import style from './Logo.module.scss';
import LogoImg from '../../images/logo.svg?react';

function Logo() {
  return (
    <div className={style.logo_container}>
      <LogoImg />
    </div>
  );
}

export default Logo;
