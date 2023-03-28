export function buildDataSource (data: any[], chartType: string, xField?: string, yField?: string) {
  if (chartType === 'pie' && xField && yField) {
    // 如果是饼图，格式化下数据
    return data.map(item => ({ label: item[xField], value: item[yField] }));
  }
  return data;
}
