import { Input } from 'antd';

export default function JsonDataSource (props: ChartSetting) {
  const { value, onChange } = props;

  const onDataChange = (event?: any) => {
    const value = event.target.value;
    if (value) {
      onChange([{
        source: JSON.parse(value)
      }]);
    }
  };

  return (
    <Input onChange={onDataChange}>

    </Input>
  );
}
