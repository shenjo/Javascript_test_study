import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function ScatterChart () {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    chart.setOption({
      dataset: [{
        source: [
          { gender: '女', height: 165, weight: 55 },
          { gender: '男', height: 177, weight: 72 },
          { gender: '女', height: 158, weight: 48 },
          { gender: '男', height: 182, weight: 85 },
          { gender: '女', height: 163, weight: 52 },
          { gender: '女', height: 170, weight: 60 },
        ]
      },{
        source:[
          { gender: '男', height: 180, weight: 80 },
          { gender: '女', height: 160, weight: 50 },
          { gender: '男', height: 175, weight: 70 },
          { gender: '男', height: 170, weight: 65 },
        ]
      }],
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
      series: [{
        datasetIndex:0,
        type: 'scatter',
        encode: { x: 'height', y: 'weight', itemName: 'gender' },

      },{
        datasetIndex:1,
        type: 'scatter',
        encode: { x: 'height', y: 'weight', itemName: 'gender' },

      }]
    });
  }, []);

  return <div ref={divRef}></div>;
}

