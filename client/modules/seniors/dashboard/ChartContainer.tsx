import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { ECBasicOption } from 'echarts/types/dist/shared';
import styles from './index.module.less';


export default function ChartContainer ({ options }: { options?: ECBasicOption }) {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>();

  useEffect(() => {
    if (ref.current) {
      chartRef.current = echarts.init(ref.current!, '',);
    }
  }, []);

  useEffect(() => {
    if (options && chartRef.current) {
      chartRef.current!.setOption(options, true);
    }
  }, [options]);
  return (
    <div ref={ref} className={styles['chart-item']} />
  );
}
