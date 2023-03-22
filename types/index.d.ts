declare module '*.less'

interface ChartSetting<T = any> {
  value: T;
  onChange (T: any): void;
}
