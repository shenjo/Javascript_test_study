import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function ChartViewer (props: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(ref.current!, '');

  }, []);

  return (
    <div ref={ref} />
  );
}
