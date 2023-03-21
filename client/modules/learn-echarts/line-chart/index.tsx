import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function LineChart () {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    chart.setOption({
      dataset: {
        source: [
          { label: 'A', count: 120, value: 20 },
          { label: 'B', count: 2001, value: 50 },
          { label: 'C', count: 150, value: 40 },
        ]
      },
      xAxis: [{ type: 'category' }, { type: 'value' }],
      yAxis: {},
      series: [
        { type: 'line', encode: { x: 'label', y: 'count' }, step: 'middle' },
        { type: 'line', xAxisIndex: 1, encode: { x: 'value', y: 'count' } }
      ]
    });
  }, []);

  return <div ref={divRef}></div>;
}
