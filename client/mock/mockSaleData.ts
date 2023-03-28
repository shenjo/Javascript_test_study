import dayjs from 'dayjs';

interface IDataItem {
  id: string;
  userName: string;
  userGroup: string;
  productName: string;
  time: string;
  price: number;
}

export const employeeNames = [{ name: '员工A', group: '华南区' }, { name: '员工B', group: '华北区' }, { name: '员工C', group: '华中区' }];
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
export const saleOriginData: IDataItem[] = new Array(100).fill(0).map(i => {
  return saleItemHelper();
});

// 公司每年的销售额走势
export const salesInfoPerYear = saleOriginData.reduce((result: any, current) => {
  const year = dayjs(current.time).format('YYYY');
  const record = result.find((i: any) => i.year === year);
  if (record) {
    record.amount += current.price;
  } else {
    result.push({ year: year, amount: current.price });
  }
  return result;
}, []);

// 所有年度每个销售组的销售额对比
export const salesPerYearPerGroup = saleOriginData.reduce((result: any, current) => {
  const year = dayjs(current.time).format('YYYY');
  const record = result.find((i: any) => i.year === year && i.name === current.userGroup);
  if (record) {
    result.amount += current.price;
  } else {
    result.push({ year: year, amount: current.price, name: current.userGroup });
  }
  return result;
}, []);

// 22年度所有销售小组的销售额占比
export const amountRatePerSaleGroupIn2022 = saleOriginData.filter(item => dayjs(item.time).format('YYYY') == '2022').reduce((result: any, current) => {
  const record = result.find((i: any) => i.name === current.userGroup);
  if (record) {
    record.amount += current.price;
  } else {
    result.push({ name: current.userGroup, amount: current.price });
  }
  return result;

}, []);
