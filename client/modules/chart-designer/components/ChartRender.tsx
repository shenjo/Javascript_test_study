import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import type { EChartsType } from 'echarts';
import styles from '../index.module.less';
import { buildDataSource } from './utils/datasourceUtils';
import { buildSeries } from './utils/seriesUtils';

interface IChartProps {
  config: Omit<IChartItem, 'id'>;
}

export default function ChartRender (props: IChartProps) {
  const { dimension, xAxisLabel, yAxisLabel, chartType, dataSource, xAxisType } = props.config;
  const [chartData, setChartData] = useState<any>([]);

  const ref = useRef<HTMLDivElement>(null);
  const chartIns = useRef<EChartsType>();

  useEffect(() => {
    if (!chartData) {
      return;
    }
    let usedDataSource = [{ source: buildDataSource(chartData, chartType!, xAxisLabel, yAxisLabel) }];
    // setting.
    let series: any[] = [];
    if (dimension) {
      let result: any = {};
      // 数据按维度分组
      chartData.forEach((currentValue: any) => {
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
      xAxis: chartType === 'pie' ? { show: false } : { type: 'category' },
      yAxis: chartType === 'pie' ? { show: false } : {},
      series
    };

    chartIns.current?.setOption(option, true);
  }, [dimension, xAxisLabel, yAxisLabel, chartType, chartData, xAxisType]);

  useEffect(() => {
    setChartData(dataSource);
  }, [dataSource]);

  useEffect(() => {
    chartIns.current = echarts.init(ref.current!, '');
  }, []);

  return (
    <div ref={ref} className={styles['chart-viewer']} />
  );
}
