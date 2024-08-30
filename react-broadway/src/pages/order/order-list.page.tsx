import BannerTable from "../../components/banner/banner-table.component";
import { FaFileExport, FaLongArrowAltDown, FaPlus } from "react-icons/fa";
import { Button, Pagination } from "flowbite-react";
import { Link } from "react-router-dom";
import OrderTable from "../../components/orders/order-table.component";




const OrderList = () => {
  
  const sampleOrders = [
    {
      userId: {
        name: "John Doe",
        email: "john.doe@example.com"
      },
      items: [
        {
          productId: {
            productName: "Wireless Headphones",
            image: "https://example.com/images/headphones.jpg"
          },
          quantity: 2,
          price: 150.00,
        },
        {
          productId: {
            productName: "Bluetooth Speaker",
            image: "https://example.com/images/speaker.jpg"
          },
          quantity: 1,
          price: 200.00,
        },
      ],
      totalAmount: 500.00,
      shippingAddress: {
        state: "California",
        district: "Los Angeles",
        muncipality: "Downtown",
        wardNo: "5",
        city: "Los Angeles",
      },
      orderStatus: "confirmed",
      paymentStatus: "paid",
      paymentType: "card",
    },
    {
      userId: {
        name: "Jane Smith",
        email: "jane.smith@example.com"
      },
      items: [
        {
          productId: {
            productName: "Smartphone",
            image: "https://example.com/images/smartphone.jpg"
          },
          quantity: 3,
          price: 75.00,
        },
      ],
      totalAmount: 225.00,
      shippingAddress: {
        state: "New York",
        district: "Manhattan",
        muncipality: "Upper East Side",
        wardNo: "12",
        city: "New York",
      },
      orderStatus: "shipped",
      paymentStatus: "unpaid",
      paymentType: "cash",
    },
    {
      userId: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      items: [
        {
          productId: {
            productName: "Laptop",
            image: "https://example.com/images/laptop.jpg"
          },
          quantity: 1,
          price: 300.00,
        },
        {
          productId: {
            productName: "Mouse",
            image: "https://example.com/images/mouse.jpg"
          },
          quantity: 2,
          price: 50.00,
        },
      ],
      totalAmount: 400.00,
      shippingAddress: {
        state: "Texas",
        district: "Houston",
        muncipality: "Downtown",
        wardNo: "3",
        city: "Houston",
      },
      orderStatus: "delivered",
      paymentStatus: "paid",
      paymentType: "eSewa",
    },
    {
      userId: {
        name: "Bob Brown",
        email: "bob.brown@example.com"
      },
      items: [
        {
          productId: {
            productName: "Gaming Console",
            image: "https://example.com/images/console.jpg"
          },
          quantity: 5,
          price: 20.00,
        },
        {
          productId: {
            productName: "Game Controller",
            image: "https://example.com/images/controller.jpg"
          },
          quantity: 1,
          price: 100.00,
        },
      ],
      totalAmount: 200.00,
      shippingAddress: {
        state: "Florida",
        district: "Miami-Dade",
        muncipality: "Miami",
        wardNo: "1",
        city: "Miami",
      },
      orderStatus: "cancelled",
      paymentStatus: "unpaid",
      paymentType: "Khalti",
    },
  ];
  
  console.log(sampleOrders);
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5 className="text-2xl font-semibold">
                <span className="text-gray-500 ">All orders:</span>
                <span className="dark:text-white">123456</span>
              </h5>
           
            </div>
           
          </div>
          <OrderTable />
         
        </div>
      </div>
    </section>
  );
};

export default OrderList;
