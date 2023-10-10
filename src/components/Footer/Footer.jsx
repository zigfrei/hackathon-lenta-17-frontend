import React from 'react';
import style from './Footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <span className={style.footer__signin_text}>
        Проблемы со входом?
        Обратитесь к системному  администратору вашего торгового комплекса.
      </span>
    </footer>
  );
}

export default Footer;
