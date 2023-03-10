import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearnEcharts from '../modules/learn-echarts';

export default function RootRouter () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LearnEcharts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
