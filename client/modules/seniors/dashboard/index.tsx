import styles from './index.module.less';
import BarChart from './bar-chart';
import PieChart from './pie-chart';
import RadarChart from './radar-chart';
import FunnelChart from './funnel-chart';

export default function Index () {
  return (
    <div className={styles['wrapper']}>
      <BarChart />
      <RadarChart />
      <PieChart />
      <FunnelChart />
    </div>
  );
}
