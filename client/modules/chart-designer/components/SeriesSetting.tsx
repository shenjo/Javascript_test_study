import { Form, Select, Input } from 'antd';
import type { FormProps } from 'antd';
import { useEffect, useState } from 'react';

const { Item } = Form;
const chartTypes = [
  { value: 'line', label: '折线图' },
  { value: 'bar', label: '柱状图' },
  { value: 'scatter', label: '散点图' },
  { value: 'pie', label: '饼图' },
];
export default function SeriesSetting (props: ChartSetting & any) {
  const { value, onChange, dataSource } = props;
  const [fields, setFields] = useState<any[]>([]);

  const onSeriesChange: FormProps['onValuesChange'] = (changedValue, value) => {
    onChange(value);
    // const { xLabel, yLabel, ...rest } = value;
    // const seriesItem = {
    //   encode: {
    //     x: xLabel,
    //     y: yLabel
    //   },
    //   ...rest
    // };
    // onChange([seriesItem]);
  };

  useEffect(() => {
    if (dataSource?.length) {
      setFields(Object.keys(dataSource[0]).map(key => ({ label: key, value: key })));
    }
  }, [dataSource]);

  return (
    <Form onValuesChange={onSeriesChange} initialValues={{ xAxisType: 'category' }}>
      <Item label={'图标类型'} name={'chartType'}>
        <Select options={chartTypes} allowClear />
      </Item>
      <Item label={'x轴字段'} name={'xAxisLabel'}>
        <Select options={fields} allowClear />
      </Item>
      <Item label={'x轴类型'} name={'xAxisType'}>
        <Input />
      </Item>
      <Item label={'图例'} name={'dimension'}>
        <Select options={fields} allowClear />
      </Item>
      <Item label={'指标'} name={'yAxisLabel'}>
        <Select options={fields} allowClear />
      </Item>

    </Form>
  );
}
