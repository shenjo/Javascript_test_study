import { Layout } from 'antd';
import styles from '../index.module.less';
import ChartDataSource from './ChartDataSource';
import { useEffect, useState } from 'react';
import SeriesSetting from './SeriesSetting';

const { Sider, Content } = Layout;

export default function ChartOptions (props: ChartSetting) {
  const [dataset, setDataset] = useState<any[]>([]);
  const [xAxis, setXAxis] = useState<any>({ type: 'category' });
  const [yAxis, setYAxis] = useState<any>({});
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    props.onChange({
      dataset: dataset[0],
      xAxis,
      yAxis,
      series
    });
  }, [dataset, xAxis, yAxis, series]);

  return (
    <Layout className={styles['options-root']}>
      <Sider theme={'light'}>
        <div>数据源</div>
      </Sider>
      <Content>
        <ChartDataSource value={dataset} onChange={setDataset} />
        <SeriesSetting value={series} onChange={setSeries} />
      </Content>
    </Layout>
  );
}
