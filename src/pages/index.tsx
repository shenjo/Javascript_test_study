import { useEffect, useRef } from 'react';
import styles from '../modules/learn-echarts/index.module.less';
import BarCharts from '../modules/learn-echarts/bar-charts';
import LineChart from '../modules/learn-echarts/line-chart';
import PieChart from '../modules/learn-echarts/pie-chart';
import Router from 'next/router';

export default function LearnEcharts () {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // dom!.appendChild(divEle);

  }, []);

  return (
    <div className={styles['chart-root']}>
      <div onClick={() => Router.push('/chart-design')}>图表设计</div>
      {[BarCharts, LineChart, PieChart].map((Co, index) => (
        <div key={index} className={styles['chart-item-wrapper']}>
          <Co />
        </div>
      ))}
      <LineChart />
    </div>
  );
}
