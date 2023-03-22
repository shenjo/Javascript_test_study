import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { EChartsType } from 'echarts';
import styles from '../index.module.less';

export default function ChartViewer (props: any) {
  const { options } = props;
  const ref = useRef<HTMLDivElement>(null);
  const chartIns = useRef<EChartsType>();

  useEffect(() => {
    chartIns.current = echarts.init(ref.current!, '');
    chartIns.current.setOption(options);
  }, []);

  useEffect(() => {
    if (chartIns.current && options) {
      chartIns.current.setOption(options);
    }
  }, [options]);

  return (
    <div ref={ref} className={styles['chart-viewer']} />
  );
}
