import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function LineChart () {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    chart.setOption({
      'tooltip': {},
      'legend': {},
      'dataset': {
        'source': [
          {
            'year': 2019,
            'amount': 200,
            'name': '华南区'
          },
          {
            'year': 2021,
            'amount': 200,
            'name': '华南区'
          },
          {
            'year': 2020,
            'amount': 100,
            'name': '华南区'
          },
          {
            'year': 2022,
            'amount': 100,
            'name': '华南区'
          }
        ]
      },
      'xAxis': {
        'type': 'time'
      },
      'yAxis': {},
      'series': [
        {
          'type': 'line',
          'encode': {
            'x': 'year',
            'y': 'amount'
          },
        },
      ]
    });
  }, []);

  return <div ref={divRef}></div>;
}
