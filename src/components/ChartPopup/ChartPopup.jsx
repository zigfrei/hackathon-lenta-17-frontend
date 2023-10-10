import React from 'react';
import style from './ChartPopup.module.scss';
import Charts from '../Charts/Charts';
import PopupHeader from '../PopupHeader/PopupHeader';

function ChartPopup() {

    return (
        <section className={style.chart_popup}>
            <PopupHeader />
            <div className={style.chart_popup__chart}>
                <Charts />
            </div>
        </section>
    );
}

export default ChartPopup;