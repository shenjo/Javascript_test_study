import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function ScatterChart () {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    chart.setOption({
      dataset: {
        source: [
          { label: '周一', value: Number(Math.random().toString().slice(2, 4)) },
          { label: '周二', value: Number(Math.random().toString().slice(2, 4)) },
          { label: '周三', value: Number(Math.random().toString().slice(2, 4)) },
          { label: '周四', value: Number(Math.random().toString().slice(2, 4)) },
          { label: '周五', value: Number(Math.random().toString().slice(2, 4)) },
          { label: '周六', value: Number(Math.random().toString().slice(2, 4)) },
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        { type: 'scatter' }
      ]
    });
  }, []);

  return <div ref={divRef}></div>;
}
