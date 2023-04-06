import { Button, Layout } from 'antd';
import styles from '../index.module.less';
import ChartDataSource from './ChartDataSource';
import { useState } from 'react';
import SeriesSetting from './SeriesSetting';

const { Sider, Content } = Layout;

export default function ChartOptions (props: any) {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [setting, setSettings] = useState<Partial<any>>({ dataIndex: 0 });

  const generateChartOptions = () => {

    props.onChange({
      ...setting,
      dataSource
    });
  };

  return (
    <Layout className={styles['options-root']}>
      <Sider theme={'light'}>
        <div>数据源</div>
      </Sider>
      <Content style={{ background: '#fff' }}>
        <ChartDataSource value={''} onChange={setDataSource} />
        <SeriesSetting dataSource={dataSource} value={''} onChange={setSettings} />

        <Button type={'primary'} onClick={generateChartOptions}>确认</Button>
      </Content>
    </Layout>
  );
}
