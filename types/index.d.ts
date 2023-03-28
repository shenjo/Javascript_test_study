declare module '*.less'

interface ChartSetting<T = any> {
  value: T;

  onChange (T: any): void;
}

interface IDataSourceItem {
  name: string,
  data: any[]
}

type IChartType = 'line' | 'pie' | 'scatter' | 'bar'

interface IUserSetting {
  dataSource: IDataSourceItem[];
  xAxisType: string,
  chartType: IChartType,
  dataIndex: number,
  xAxisLabel: string,
  dimension: string,
  yAxisLabel: string,
  series: any[] // 由维度、指标、图表类型自动生成，局部
}
