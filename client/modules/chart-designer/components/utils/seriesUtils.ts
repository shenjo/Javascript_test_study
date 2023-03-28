export function buildSeries (chartType: string, xField: string, yField: string, dataIndex?: number) {
  const encode = chartType === 'pie' ? undefined : {
    x: xField,
    y: yField
  };
  return {
    type: chartType,
    ...encode,
    datasetIndex: dataIndex
  };
}
