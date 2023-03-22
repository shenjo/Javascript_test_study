import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import JsonDataSource from './data-source/JsonDataSource';

export default function ChartDataSource (props: ChartSetting) {
  const { value, onChange } = props;

  const items: TabsProps['items'] = [
    {
      key: 'json', label: 'JSON数据源',
      children: <JsonDataSource value={value} onChange={onChange} />
    }
  ];

  return (
    <Tabs items={items} />
  );
}
