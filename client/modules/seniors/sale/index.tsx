import styles from './index.module.less';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import dayjs from 'dayjs';

const employeeNames = [{ name: '员工A', group: '华南区' }, { name: '员工B', group: '华北区' }, { name: '员工C', group: '华中区' }];
// 售卖的商品
const productNames = [{ name: '产品甲', price: 100 }, { name: '产品乙', price: 150 }, { name: '产品丙', price: 200 }];
const saleTimes = ['2019', '2020', '2021', '2022'];

const saleItemHelper = () => {
  const randomEmployee = employeeNames[Math.floor(Math.random() * (employeeNames.length))];
  const randomProduct = productNames[Math.floor(Math.random() * (productNames.length))];
  const randomYear = saleTimes[Math.floor(Math.random() * (saleTimes.length))];
  return {
    id: Math.random().toString().slice(1, 9),
    userName: randomEmployee.name,
    userGroup: randomEmployee.group,
    productName: randomProduct.name,
    time: dayjs(randomYear, 'YYYY').startOf('y').add(Math.floor(Math.random() * 365), 'd').add(Math.floor(Math.random() * 24 * 60 * 60), 'seconds').format('YYYY-MM-DD HH:mm:ss'),
    price: randomProduct.price
  };
};
const saleOriginData = new Array(100).fill(0).map(i => {

  return saleItemHelper();
});

console.log(saleOriginData);

export default function Index () {

  const senior1Data = saleOriginData.reduce((result: any, current) => {
    const year = dayjs(current.time).format('YYYY');
    const record = result.find((i: any) => i.year === year);
    if (record) {
      record.amount += current.price;
    } else {
      result.push({ year: year, amount: current.price });
    }
    return result;
  }, []);

  const senior1Series = [{ type: 'bar', encode: { x: 'year', y: 'amount' } }];

  const senior2Data = saleOriginData.reduce((result: any, current) => {
    const year = dayjs(current.time).format('YYYY');
    const record = result.find((i: any) => i.year === year);
    if (record) {
      if (record[current.userGroup]) {
        record[current.userGroup] += current.price;
      } else {
        record[current.userGroup] = current.price;
      }
    } else {
      result.push({ year: year, [current.userGroup]: current.price });
    }
    return result;
  }, []);
  const senior2Series = employeeNames.map(i => {
    return { type: 'bar', encode: { x: 'year', y: i.group } };
  });

  console.log('senior', {senior1Data,senior2Data});
  return (
    <div>
      <h2>销售公司有 A,B,C 销售小组，公司有甲乙丙三种产品</h2>
      <code>
        1. 统计公司每年的销售额走势
        2. 所有年度每个销售组的销售额对比
        3. 某一年某个产品的销售占比
        4. 某一年每个小组每个产品的销售占比
      </code>
      <div className={styles.list}>
        <SeniorCard data={senior1Data} series={senior1Series} xAxis={{ type: 'time' }} />
        <SeniorCard data={senior2Data} series={senior2Series} xAxis={{ type: 'time' }} />
        <Senior4 />
      </div>
    </div>
  );
}

function SeniorCard ({ data, series, xAxis, yAxis }: any) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    console.log('shenjo 11',{
      // dataSet
      xAxis: xAxis || { type: 'category' },
      yAxis: yAxis || {},
      // tooltip:{},
      // legend:{},
      dataset: {
        source: data
      },
      series
    })
    chart.setOption({
      // dataSet
      xAxis: xAxis || { type: 'category' },
      yAxis: yAxis || {},
      // tooltip:{},
      // legend:{},
      dataset: {
        source: data
      },
      series
    });
  }, []);

  return (
    <div className={styles.item} ref={divRef} />
  );
}

function Senior4 () {

  const data = saleOriginData.reduce((result: any, current) => {
    const record = result.find((i: any) => i.name === current.userGroup && i.product === current.productName);
    if (record) {
      record.price += current.price;
    } else {
      result.push({ name: current.userGroup, product: current.productName, price: current.price });
    }
    return result;
  }, []);

  const dataset = employeeNames.map(item => {
    return {
      source: data.filter((i: any) => i.name === item.group).map((item: any) => ({ label: item.product, value: item.price }))
    };
  });

  const divRef = useRef<HTMLDivElement>(null);

  const length = employeeNames.length;
  const each = Math.floor(100 / length);
  const grid = employeeNames.map((item, index) => {
    return {
      left: `${index * each}%`,
      top: 0,
      width: `${each}%`,
      height: '100%'
    };
  });

  const xAxis = employeeNames.map((item, index) => ({
    gridIndex: index,
    type: 'category',
  }));

  const yAxis = employeeNames.map((item, index) => ({
    gridIndex: index
  }));

  const series: any[] = employeeNames.map((item, index) => ({
    name: item.group,
    datasetIndex: index,
    ...grid[index],
    type: 'pie'
  }));

  console.log('data:', {
    // dataSet
    grid,
    xAxis: xAxis,
    yAxis: yAxis,
    // tooltip:{},
    // legend:{},
    dataset: dataset,
    series
  });
  useEffect(() => {
    const chart = echarts.init(divRef.current!, '',);
    chart.setOption({
      // dataSet
      grid,
      xAxis: xAxis,
      yAxis: yAxis,
      // tooltip:{},
      // legend:{},
      dataset: dataset,
      series
    });
  }, []);

  return (
    <div className={styles.item} ref={divRef} />
  );
}
