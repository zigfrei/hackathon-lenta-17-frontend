import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getUser } from '../../services/slices/userSlice';
import Charts from '../../components/Charts/Charts';
import Login from '../Login/Login';
import ChartPopup from '../../components/ChartPopup/ChartPopup';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import style from './Main.module.scss';

function Main() {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.main}>
        <Aside />
        <ChartPopup />
      </main>
    </div>
  );
}

export default Main;
