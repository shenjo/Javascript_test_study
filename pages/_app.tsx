import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import '../client/styles/global.less';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

dayjs.locale('zh-cn');
export default function MyApp ({ Component, pageProps }: any) {
  return (
    <ConfigProvider locale={zhCN}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
