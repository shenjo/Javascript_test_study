import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function PieChart () {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    chart.setOption({
      dataset: {
        source: [
          { label: '直接访问', value: '325' },
          { label: '搜索引擎', value: '1548' },
          { label: '广告', value: '234' },
        ]
      },
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        { type: 'pie', roseType: 'area' }
      ]
    });
  }, []);

  return <div ref={divRef}></div>;
}
