import React from 'react';
import style from './Footer.module.scss';


function Footer({ isLoggedIn }) {

    return (
        <section className={style.footer}>
            {isLoggedIn ? (
                <></>
            ) : (
                <span className={style.footer__signin_text}>
                    Проблемы со входом?
                    Обратитесь к системному  администратору вашего торгового комплекса.  
                </span>
            )

            }
        </section>

    );
}

export default Footer;