import { useMemo, useState } from 'react';
import ChartViewer from './components/ChartViewer';
import ChartOptions from './components/ChartOptions';
import styles from './index.module.less';

export default function ChartDesigner () {


  const [options,setOptions] = useState<any>({});

  return (
    <div className={styles['designer-root']}>
      <ChartViewer options={options} />
      <ChartOptions value={options} onChange={setOptions} />
    </div>
  );
}
