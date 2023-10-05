import React from 'react';
import style from './Aside.module.scss';

function Aside() {

    return (
        <div className={style.aside}>
            <h2>Новый прогноз</h2>
            <p>Выберите критерии, по которым нужно сделать прогноз</p>
            <ul>
                <li>
                    {/* <h3>
                        <button></button>
                        <nav>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </nav>
                    </h3> */}
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button></button>
            <button></button>
        </div>
    );
}

export default Aside;