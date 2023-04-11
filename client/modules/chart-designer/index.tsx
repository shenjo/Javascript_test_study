import { useMemo, useState } from 'react';
import ChartRender from './components/ChartRender';
import ChartOptions from './components/ChartOptions';
import styles from './index.module.less';

export default function ChartDesigner () {

  const [options, setOptions] = useState<any>({
    'chartType': 'line',
    'xAxisLabel': 'year',
    'xAxisType': 'category',
    'yAxisLabel': 'amount',
    title: {
      show: true,
      text: '测试',
      pos:'bottomCenter'

    },
    'dataSource': [
      {
        'year': '2022',
        'amount': 4800
      },
      {
        'year': '2019',
        'amount': 2400
      },
      {
        'year': '2020',
        'amount': 4350
      },
      {
        'year': '2021',
        'amount': 3200
      }
    ]
  });

  console.log(options);

  return (
    <div className={styles['designer-root']}>
      <ChartRender config={options} />
      <ChartOptions value={options} onChange={setOptions} />
    </div>
  );
}
