import ChartContainer from './ChartContainer';
import { one_many_radar, one_one, tow_one } from '@/modules/seniors/dashboard/data/order';
import { groupBy } from 'lodash';

export default function RadarChart () {
  const data1 = one_one.map((item: any) => item.count);
  const indicator = one_one.map((item: any) => ({ name: item.date, max: 10 }));
  console.log('shenjo aaa', data1, indicator);
  const options = {
    tooltip: {},
    title: {
      text: '一维度(提交日期)，一指标（下单数）'
    },
    radar: {
      indicator
    },
    series: [{
      type: 'radar',
      data: [{ value: data1 }]
    }]
  };

  const options2Data = tow_one; // date name count
  const group = groupBy(options2Data, 'name');
  let series: any = [{ type: 'radar', data: [] }];
  let count = 0;
  Object.entries(group).forEach(([key, val], index) => {
    series[0].data.push({ value: val.map(item => item.count) });
  });
  // const indicator = one_one.map((item: any) => ({ name: item.date,max:10 }));

  const options2 = {
    tooltip: {},
    title: {
      text: '二维度(下单日期、制单人)，一指标（下单数）'
    },
    radar: {
      indicator: [...new Set(tow_one.map((item: any) => item.date))].map((name) => ({ name, max: 10 })).sort((a: any, b: any) => a.name - b.name)
    },
    series
  };


  //
  const options3 = {
    tooltip: {},
    title: {
      text: '一维度(联系人)，多指标（订单总金额、待付款）'
    },
    radar: {
      indicator: [...new Set(one_many_radar.map((item: any) => item.name))].map((name) => ({ name }))
    },
    series: [
      {
        type: 'radar', data: ['amount', 'wait'].map(item => ({
          value: one_many_radar.map((i:any) => i[item]),
          name: item
        }))
      }
    ]
  };

  console.log('shenjo options3', options3,one_many_radar);

  return (
    <>
      <ChartContainer options={options} />
      <ChartContainer options={options2} />
      <ChartContainer options={options3} />
    </>
  );
}
