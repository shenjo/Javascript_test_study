import BarCharts from './bar-charts';
import LineChart from './line-chart';
import styles from './index.module.less';
import PieChart from './pie-chart';

export default function LearnEcharts () {
  return (
    <div className={styles['chart-root']}>
      {[BarCharts, LineChart, PieChart].map((Co, index) => (
        <div key={index} className={styles['chart-item-wrapper']}>
          <Co />
        </div>
      ))}
      <LineChart />
    </div>
  );
}
