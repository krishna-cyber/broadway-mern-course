import { useEffect, useState } from "react";
import BannerTable from "../../components/banner/banner-table.component";
import { FaFileExport, FaLongArrowAltDown, FaPlus } from "react-icons/fa";
import { Button, Pagination } from "flowbite-react";
import { Link } from "react-router-dom";
import ProductTable from "../../components/productDashboard/product-table.component";

const products = [
  {
      id: "001",
      title: "Wireless Bluetooth Headphones",
      imageLink: "https://example.com/images/headphones.jpg",
      status: "active",
      price: 79.99,
      discount: 20,
      description: "Experience high-quality sound with our wireless Bluetooth headphones. Designed for comfort and style, these headphones offer up to 20 hours of playtime on a single charge. Perfect for music lovers on the go."
  },
  {
      id: "002",
      title: "Smart LED TV 55\"",
      imageLink: "https://example.com/images/smart_tv.jpg",
      status: "active",
      price: 499.99,
      discount: 15,
      description: "Enjoy stunning visuals and smart features with our 55\" Smart LED TV. With 4K resolution, HDR support, and built-in streaming apps, it's the ultimate entertainment hub for your living room."
  },
  {
      id: "003",
      title: "Stainless Steel Water Bottle",
      imageLink: "https://example.com/images/water_bottle.jpg",
      status: "inactive",
      price: 24.99,
      discount: 10,
      description: "Stay hydrated with our durable stainless steel water bottle. With double-wall insulation, it keeps your drinks cold for up to 24 hours and hot for up to 12 hours. Perfect for outdoor activities and everyday use."
  },
  {
      id: "004",
      title: "Gaming Laptop",
      imageLink: "https://example.com/images/gaming_laptop.jpg",
      status: "active",
      price: 1299.99,
      discount: 5,
      description: "Power through your games with our high-performance gaming laptop. Equipped with the latest GPU, Intel i7 processor, and 16GB RAM, it delivers smooth gameplay and quick load times for all your favorite titles."
  },
  {
      id: "005",
      title: "Ergonomic Office Chair",
      imageLink: "https://example.com/images/office_chair.jpg",
      status: "inactive",
      price: 199.99,
      discount: 25,
      description: "Sit comfortably all day with our ergonomic office chair. Designed with adjustable lumbar support and breathable mesh, it's perfect for long hours of work or study."
  }
];



const ProductList = () => {
  
 
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-gray-500">All Products:</span>
                <span className="dark:text-white">123456</span>
              </h5>
              <h5>
                <span className="text-gray-500">Total sales:</span>
                <span className="dark:text-white">$88.4k</span>
              </h5>
            </div>
            <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
              <Link to={"/admin/product-create"}>
                <Button
                  size={"xs"}
                  color={""}
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <FaPlus className="mr-3 h-4 w-4" />
                  Add new product
                </Button>
              </Link>

              <Button
                size={"xs"}
                color={""}
                type="button"
                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <FaLongArrowAltDown className="mr-3 h-4 w-4" />
                Update stocks 1/250
              </Button>
              <Button
                size={"xs"}
                color={""}
                type="button"
                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <FaFileExport className="mr-3 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <ProductTable />
         
        </div>
      </div>
    </section>
  );
};

export default ProductList;
