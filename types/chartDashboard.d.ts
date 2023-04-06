interface IDataSourceParams {
  key: string;
  value: string;
}

interface IDataSource {
  id: string
  type: 'url' | 'model',
  name: string;
  url: string,
  method: 'GET' | 'POST'
  params: IDataSourceParams[]

}

interface IChartItem {
  id: string
  dataSource: IDataSource,
  chartType: string,
  xAxisType?: string
  dataIndex: 0,
  xAxisLabel: string,
  dimension?: string
  yAxisLabel: string,
  // series: []
}

interface IChartTitle {
  show: boolean;
  text: string;
  position: 'bottomCenter' | 'topCenter';
}

interface IChartCommonConfig {
  title: IChartTitle;

}
