import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import Charts from '../../components/Charts/Charts';
import Login from '../Login/Login';
import ChartPopup from '../../components/ChartPopup/ChartPopup';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import style from './Main.module.scss';
import { UpdateDate } from '../../components/UpdateDate/UpdateDate';
import { Modal } from '../../components/Modal/Modal';
import {
  getShops, getCategories, getSales, postForecast,
} from '../../services/slices/dataSlice';

function Main() {
  const dispatch = useDispatch();
  const {
    shopsData,
    categoriesData,
    salesData,
    forecastData,
  } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getShops());
    dispatch(getCategories());
  }, [dispatch]);
  console.log(shopsData, categoriesData);
  return (
    <div className={style.page}>
      <Header />
      <main className={style.main}>
        <div className={style.leftColumn}>
          <Aside />
          <UpdateDate />
        </div>
        {/* <Modal /> */}
        {/* <ChartPopup /> */}
      </main>
    </div>
  );
}

export default Main;
