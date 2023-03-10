import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BarCharts () {
  const divRef = useRef<HTMLDivElement>(null);
  // const data
  useEffect(() => {
    const chart = echarts.init(divRef.current!, '', {
      width: 400,
      height: 400
    });
    chart.setOption({
      // dataSet
      xAxis: { type: 'category' },
      yAxis: [{}, {}],
      dataset: {
        // dimension: ['label', 'temp', 'rain'],
        source: [
          { label: '一月', name: '一月哈哈', temp: 10, rain: 100 },
          { label: '二月', name: '二月哈哈', temp: 15, rain: 200 },
          { label: '三月', name: '三月哈哈', temp: 18.2, rain: 250 },
          { label: '四月', name: '四月哈哈', temp: 25, rain: 20 },
          { label: '五月', name: '五月哈哈', temp: 25.8, rain: 60 },
          { label: '六月', name: '六月哈哈', temp: 32, rain: 80 },
          { label: '七月', name: '七月哈哈', temp: 34, rain: 20 },
          { label: '八月', name: '八月哈哈', temp: 36, rain: 50 },
          { label: '九月', name: '九月哈哈', temp: 38, rain: 123 },
          { label: '十月', name: '十月哈哈', temp: 27, rain: 44 },
          { label: '十一月', name: '十一月哈哈', temp: 24, rain: 23 },
          { label: '十二月', name: '十二月哈哈', temp: 18, rain: 55 },
        ]
      },
      series: [{
        type: 'bar',
        stack:'x',
        encode: {
          x: ['label'],
          y: 'temp'
        }
      }, {
        type: 'line',
        yAxisIndex: 1,
        encode: {
          x: 'label',
          y: 'rain'
        }
      }, {
        type: 'bar',
        stack:'x',
        // yAxisIndex: 1,
        encode: {
          x: 'label',
          y: 'rain'
        }
      }]
    });
    // echarts
  }, []);

  return (
    <div ref={divRef}></div>
  );
}

interface IChartData {
  label: string;
  temp: number;
  rain: number;
}
