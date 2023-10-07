import React from 'react';
import style from './Aside.module.scss';
import { DropdownItem } from '../DropdownItem/DropdownItem';

function Aside() {

    return (
        <div className={style.aside}>
            <h2 className={style.aside__title}>Параметры прогноза</h2>
            <DropdownItem />
            <button></button>
            <button></button>
        </div>
    );
}

export default Aside;