import React from 'react';
  import style from './Logo.module.scss';

  function Logo() {
    return (
      <div className={style.logo_container}>
        <img src='../../images/logo.svg' className={style.logo__image} alt='Logo image'/>
      </div>
    );
  }
  
  export default Logo;