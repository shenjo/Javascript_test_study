import ChartContainer from './ChartContainer';
import data from '@/modules/seniors/dashboard/data/order';
import field from '@/modules/seniors/dashboard/field';

export default function FunnelChart () {
  const options = {
    title: {
      text: '0维度，多指标（金额求和、待付款求和）'
    },
    tooltip:{},
    dataset: [{
      source: data.reduce((result: any, current: any) => {
        const amount = current[field['订单总额']] || 0;
        const wait = current[field['待付款']] || 0;
        const findAmount = result.find((item: any) => item.name === '订单总额');
        const findWait = result.find((item: any) => item.name === '待付款');
        if (findAmount) {
          findAmount.count += amount;
        } else {
          result.push({ name: '订单总额', count: amount });
        }
        if (findWait) {
          findWait.count += wait;
        } else {
          result.push({ name: '待付款', count: amount });

        }
        return result;
      }, [] as any)
    }],
    series: [
      { type: 'funnel', }
    ]
  };

  const options2 = {
    title: {
      text: '一维度(制单人），多指标（金额求和、待付款求和）'
    },
    tooltip:{},
    dataset: [{
      source: data.reduce((result: any, current: any) => {
        const name = current[field['制单人']].name;
        const amount = current[field['订单总额']] || 0;
        const wait = current[field['待付款']] || 0;
        const find = result.find((item: any) => item.name === name);
        if (find) {
          find.amount += amount;
          find.wait += wait;
        } else {
          result.push({ name, amount, wait });
        }
        return result;
      }, [] as any)
    }],
    series: [
      { type: 'funnel', }
    ]
  };

  console.log('shenjo funnel',options2)

  return (
    <>
      <ChartContainer options={options} />
      <ChartContainer options={options2} />
    </>
  );
}
