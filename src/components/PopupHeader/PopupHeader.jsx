import React from 'react';
import style from './PopupHeader.module.scss';

function PopupHeader() {

    return (
        <section className={style.header__main}>
            <div className={style.header__container_main}>
                <h2 className={style.header__title_main}>Прогноз</h2>
            </div>
            <div className={style.header__container}>
                <h2 className={style.header__title}>Качество прогноза</h2>
            </div>
        </section>
    );
}

export default PopupHeader;