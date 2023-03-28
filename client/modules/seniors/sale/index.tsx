import styles from './index.module.less';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import dayjs from 'dayjs';
import { employeeNames, saleOriginData, salesInfoPerYear } from '@/mock/mockSaleData';

export default function Index () {

  const senior1Data = salesInfoPerYear

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
