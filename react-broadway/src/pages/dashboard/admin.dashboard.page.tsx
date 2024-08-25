import { Card } from "flowbite-react";
import { Column, Pie } from '@ant-design/plots';

const AdminDashboard = () => {
  const columnBarData = [
    {
      month: "PreviousMonth",
      product: "Product 1",
      sales: 18.9,
    },
    {
      month: "PreviousMonth",
      product: "Product 2",
      sales: 28.8,
    },
    {
      month: "PreviousMonth",
      product: "Product 3",
      sales: 39.3,
    },
    {
      month: "PreviousMonth",
      product: "Product 4",
      sales: 81.4,
    },
    {
      month: "PreviousMonth",
      product: "Product 5",
      sales: 47,
    },
    {
      month: "PreviousMonth",
      product: "Product 6",
      sales: 20.3,
    },
   
  
    {
      month: "ThisMonth",
      product: "Product 1",
      sales: 12.4,
    },
    {
      month: "ThisMonth",
      product: "Product 2",
      sales: 23.2,
    },
    {
      month: "ThisMonth",
      product: "Product 3",
      sales: 34.5,
    },
    {
      month: "ThisMonth",
      product: "Product 4",
      sales: 99.7,
    },
    {
      month: "ThisMonth",
      product: "Product 5",
      sales: 52.6,
    },
    {
      month: "ThisMonth",
      product: "Product 6",
      sales: 35.5,
    },
   
   
  ];
  const columnBarConfig = {
    data:columnBarData ,
    xField: 'product', // translated from '月份'
    yField: 'sales', // translated from '月均降雨量'
    colorField: 'month',
    group: true,
    style: {
      // Padding for the four sides of the rectangle
      inset: 5,
      // Padding for individual directions of the rectangle
      // insetLeft: 0,
      // insetRight: 20,
      // insetBottom: 0,
      // insetTop: 10,
    },
  };
  const pieConfig = {
    data: [
      { type: 'Category One', totalProducts: 27 },
      { type: 'Category Two', totalProducts: 25 },
      { type: 'Category Three', totalProducts: 18 },
      { type: 'Category Four', totalProducts: 15 },
      { type: 'Category Five', totalProducts: 10 },
      { type: 'Others', totalProducts: 5 },
    ],
    angleField: 'totalProducts',
    colorField: 'type',
    label: {
      text: 'totalProducts', // Display the totalProducts on the pie slices
      position: 'outside', // Position of the label
    },
    legend: {
      position: 'right', // Position of the legend
      itemName: {
        style: {
          fontSize: 18, // Optional: Customize the font size of legend items
        },
      },
    },
  };
  const monthlySellingConfig = {
    data: [
      {
          "month": "January",
          "salesAmount": 3520
      },
      {
          "month": "February",
          "salesAmount": 2940
      },
      {
          "month": "March",
          "salesAmount": 4780
      },
      {
          "month": "April",
          "salesAmount": 4253
      },
      {
          "month": "May",
          "salesAmount": 12702
      },
      {
          "month": "June",
          "salesAmount": 2288
      },
      {
          "month": "July",
          "salesAmount": 2015
      },
      {
          "month": "August",
          "salesAmount": 6094
      },
      {
          "month": "September",
          "salesAmount": 5320
      },
      {
          "month": "October",
          "salesAmount": 4810
      },
      {
          "month": "November",
          "salesAmount": 3590
      },
      {
          "month": "December",
          "salesAmount": 6890
      }
  ]
  
  ,
  xField: 'month',
  yField: 'salesAmount',
  label: {
    text: (d:any) => `${d.salesAmount}`,
    textBaseline: 'bottom',
  },
  axis: {
    y: {
      labelFormatter: '.0f',
    },
  },
  style: {
    // Rounded corners style
    radiusTopLeft: 10,
    radiusTopRight: 10,
  
  },
  
};


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 ">
          <Card
            href="#"
            className=" cursor-auto hover:bg-green-700 max-w-sm bg-green-600"
          >
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
              Total Customers
            </h5>
            <p className=" text-white font-medium text-2xl dark:text-gray-400">
              1000
            </p>
          </Card>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 ">
          <Card
            href="#"
            className=" cursor-auto hover:bg-pink-700 max-w-sm bg-pink-600"
          >
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
              Total Products
            </h5>
            <p className=" text-white font-medium text-2xl dark:text-gray-400">
              1000
            </p>
          </Card>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 ">
          <Card
            href="#"
            className=" cursor-auto hover:bg-cyan-700 max-w-sm bg-cyan-600"
          >
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
              Total Category
            </h5>
            <p className=" text-white font-medium text-2xl dark:text-gray-400">
              1000
            </p>
          </Card>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 ">
          <Card
            href="#"
            className=" cursor-auto hover:bg-red-700 max-w-sm bg-red-600"
          >
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
              Total Orders
            </h5>
            <p className=" text-white font-medium text-2xl dark:text-gray-400">
              1000
            </p>
          </Card>
        </div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-auto mb-4">
        <h2 className="text-semibold p-4 text-2xl">
          Top Sellling products this month 
        </h2>
        <Column {...columnBarConfig} />
  
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-auto"> <h2 className="text-semibold p-4 text-2xl">
          Categories Distribution
          <Pie  {...pieConfig} />
        </h2></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-auto md:h-auto">
        <h2 className="text-semibold p-4 text-2xl">
          Top 5 brands by selling 
          <Column {...monthlySellingConfig} />
        </h2>
        </div>
      
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-fit mb-4">
      <h2 className="text-semibold p-4 text-2xl">
         MonthWise Selling
        </h2>
          <Column {...monthlySellingConfig} />
      </div>
    
    </>
  );
};

export default AdminDashboard;
