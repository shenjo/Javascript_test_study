import { Button, Layout } from 'antd';
import styles from '../index.module.less';
import ChartDataSource from './ChartDataSource';
import { useState } from 'react';
import SeriesSetting from './SeriesSetting';
import { buildSeries } from '@/modules/chart-designer/components/utils/seriesUtils';
import { buildDataSource } from '@/modules/chart-designer/components/utils/datasourceUtils';

const { Sider, Content } = Layout;

export default function ChartOptions (props: ChartSetting) {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [setting, setSettings] = useState<Partial<IUserSetting>>({ dataIndex: 0 });

  const generateChartOptions = () => {
    const { dimension, xAxisLabel, yAxisLabel, chartType, xAxisType } = setting;
    let usedDataSource = [{ source: buildDataSource(dataSource, chartType!, xAxisLabel, yAxisLabel) }];
    // setting.
    let series: any[] = [];
    if (dimension) {
      let result: any = {};
      // 数据按维度分组
      dataSource.forEach((currentValue) => {
        const item = result[currentValue[dimension]];
        if (item) {
          item.push(currentValue);
        } else {
          result[currentValue[dimension]] = [currentValue];
        }
      });

      const originLength = usedDataSource.length;
      Object.keys(result).forEach((key, index) => {
        // 如果是时间类的，数据要按照时间排序下，要不然echarts会错乱
        const data = xAxisType === 'time' ? result[key].sort((a: any, b: any) => a[xAxisLabel as string] - b[xAxisLabel as string]) : result[key];

        usedDataSource.push({ source: data });
        series.push(buildSeries(chartType!, xAxisLabel!, yAxisLabel!, index + originLength));
      });
      // dataSource
      // const d = dataSource.map(item=>)
    } else {
      series.push(buildSeries(chartType!, xAxisLabel!, yAxisLabel!, 0));
    }
    // 加一些处理器

    const option = {
      tooltip: {},
      legend: {},
      dataset: usedDataSource,
      xAxis: chartType === 'pie' ? { show: false } : { type: xAxisType || 'category' },
      yAxis: chartType === 'pie' ? { show: false } : {},
      series
    };
    console.log('shenjo test', option);

    props.onChange(option);
  };

  return (
    <Layout className={styles['options-root']}>
      <Sider theme={'light'}>
        <div>数据源</div>
      </Sider>
      <Content>
        <ChartDataSource value={''} onChange={setDataSource} />
        <SeriesSetting dataSource={dataSource} value={''} onChange={setSettings} />

        <Button type={'primary'} onClick={generateChartOptions}>确认</Button>
      </Content>
    </Layout>
  );
}
