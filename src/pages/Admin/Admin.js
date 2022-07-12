import React from "react";
import "./style.scss";
import { Column } from '@ant-design/plots';

export default function Admin() {
  const data = [
    {
      type: 'Tháng 1',
      value: 0.16,
    },
    {
      type: 'Tháng 2',
      value: 0.125,
    },
    {
      type: 'Tháng 1',
      value: 0.24,
    },
    {
      type: 'Tháng 1',
      value: 0.19,
    },
    {
      type: 'Tháng 1',
      value: 0.22,
    },
    {
      type: 'Tháng 1',
      value: 0.05,
    },
    {
      type: 'Tháng 1',
      value: 0.01,
    },
    {
      type: 'Tháng 1',
      value: 0.015,
    },
  ];
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="box">
            <div className="stats-icon">
              <i className="fa-solid fa-money-bill"></i>
            </div>
            <div className="stats-info">
              <h4>TOTAL EARNING </h4>
              <p>$5000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="chart">
        <Column {...config}/>
        </div>
      </div>
    </>
  );
}
