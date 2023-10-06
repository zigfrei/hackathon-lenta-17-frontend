import React from 'react';
import style from './LogoExtraSmallWhite.module.scss';
import LogoImg from '../../images/logo-extrasmall-white.svg?react';

function LogoExtraSmallWhite() {
  return (
    <div className={style.logo_container}>
      <LogoImg />
    </div>
  );
}

export default LogoExtraSmallWhite;
