import ChartContainer from '@/modules/seniors/dashboard/ChartContainer';
import { one_one } from '@/modules/seniors/dashboard/data/order';

export default function PieChart () {
  const data = one_one.map((item: any) => ({ label: item.date, value: item.count }));
  const options = {
    dataset: [{
      source: data
    }],
    title: {
      text: '一维度(提交日期)，一指标（下单数）'
    },
    xAxis: { type: 'category', show: false },
    yAxis: {},
    series: [{
      type: 'pie',
    }]
  };
  return (
    <ChartContainer options={options} />
  );
}
