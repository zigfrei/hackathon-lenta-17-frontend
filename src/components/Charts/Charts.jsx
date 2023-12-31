/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Line } from '@ant-design/charts';
import style from './Charts.module.scss';

function Charts() {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    width: 1000,
    height: 550,
    autoFit: true,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  let chart;
  // Export Image
  const downloadImage = () => {
    chart?.downloadImage();
  };
    // Get chart base64 string
  const toDataURL = () => {
    console.log(chart?.toDataURL());
  };

  return (
    <div className={style.charts}>
      {/* <section className={style.charts__chart}> */}
      <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
      {/* </section> */}
    </div>
  );
}
export default Charts;
