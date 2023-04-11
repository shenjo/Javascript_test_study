import ChartContainer from '@/modules/seniors/dashboard/ChartContainer';
import data, { one_many, one_one, tow_one } from './data/order';
import type { ECBasicOption } from 'echarts/types/dist/shared';
import dayjs from 'dayjs';
import { groupBy, cloneDeep } from 'lodash';
import field from '@/modules/seniors/dashboard/field';

export default function BarChart () {

  const options1: ECBasicOption = {
    dataset: [{
      source: one_one
    }],
    title: {
      text: '一维度(提交日期)，一指标（下单数）'
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{
      type: 'bar',
      encode: {
        x: 'date',
        y: 'count'
      }
    }]
  };

  const options2Data = tow_one

  const group = groupBy(options2Data, 'name');
  let dataSource: any = [];
  let series: any = [];
  let count = 0;
  Object.entries(group).forEach(([key, val], index) => {
    dataSource.push({ source: val });
    series.push({ type: 'bar', encode: { x: 'date', y: 'count', datasetIndex: count++ } });
  });

  const options2: ECBasicOption = {
    legend: [{}, {}],
    tooltip: {},
    dataset: dataSource,
    xAxis: { type: 'time' },
    yAxis: {},
    title: {
      text: '二维度(下单日期、制单人)，一指标（下单数）'
    },
    series
  };

  const options3: ECBasicOption = {
    dataset: [{
      source: one_many
    }],
    xAxis: { type: 'category' },
    yAxis: {},
    title: {
      text: '一维度(制单人)，多指标（订单总金额、待付款）'
    },
    series: [{ type: 'bar', encode: { x: 'name', y: 'amount' } }, { type: 'bar', encode: { x: 'name', y: 'wait' } },]

  };

  const lineOptions = [options1, options2, options3].map(item => {
    let temp = cloneDeep(item);
    if (Array.isArray(temp.series)) {
      temp.series.forEach(i => i.type = 'line');
    }
    return temp;
  });

  return (
    <>
      <ChartContainer options={options1} />
      <ChartContainer options={options2} />
      <ChartContainer options={options3} />
      <ChartContainer options={lineOptions[0]} />
      <ChartContainer options={lineOptions[1]} />
      <ChartContainer options={lineOptions[2]} />
    </>
  );
}
