import { Input, Select } from 'antd';
import { amountRatePerSaleGroupIn2022, salesInfoPerYear, salesPerYearPerGroup } from '@/mock/mockSaleData';

const values = [salesInfoPerYear, salesPerYearPerGroup, amountRatePerSaleGroupIn2022];
export default function JsonDataSource (props: ChartSetting) {
  const { value, onChange } = props;

  const onValueChange = (value: number) => {
    onChange(values[value]);
  };

  return (
    <Select onChange={onValueChange} options={[
      { label: '公司年度销售数据', value: 0 },
      { label: '每个小组每年的销售情况', value: 1 },
      { label: '22年度所有销售小组的销售额占比', value: 2 }
    ]} />
  );
}
