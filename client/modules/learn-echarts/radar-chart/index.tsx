import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function RadarChart () {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    const data = [
      {name:'a',count:20,count2:10},{name:'b',count:30,count2:10},{name:'c',count:40,count2:10},{name:'d',count:50,count2:10},{name:'e',count:60,count2:10}
    ]
    chart.setOption({
      radar: {
        indicator:data.map(item=> item.name)
      },
      series: [{
        type: 'radar',
        data: [{ value: data.map(item=>item.count) },{ value: data.map(item=>item.count2) }]
      }]
    });
  }, []);

  return <div ref={divRef}></div>;
}
