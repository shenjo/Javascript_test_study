import { Form, Select, Input } from 'antd';
import type { FormProps } from 'antd';

const { Item } = Form;
const chartTypes = [
  { value: 'line', label: '折线图' },
  { value: 'bar', label: '柱状图' },
];
export default function SeriesSetting (props: ChartSetting) {
  const { value, onChange } = props;

  const onSeriesChange: FormProps['onValuesChange'] = (changedValue, value) => {
    const { xLabel, yLabel, ...rest } = value;
    const seriesItem = {
      encode: {
        x: xLabel,
        y: yLabel
      },
      ...rest
    };
    onChange([seriesItem]);
  };

  return (
    <Form onValuesChange={onSeriesChange} defaultValue={value}>
      <Item label={'图标类型'} name={'type'}>
        <Select options={chartTypes} />
      </Item>
      <Item label={'x轴字段'} name={'xLabel'}>
        <Input />
      </Item>
      <Item label={'y轴字段'} name={'yLabel'}>
        <Input />
      </Item>
    </Form>
  );
}
