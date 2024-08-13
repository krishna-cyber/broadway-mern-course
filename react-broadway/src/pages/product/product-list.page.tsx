import { useEffect, useState } from "react";
import BannerTable from "../../components/banner/banner-table.component";
import { FaFileExport, FaLongArrowAltDown, FaPlus } from "react-icons/fa";
import { Button, Pagination } from "flowbite-react";
import { Link } from "react-router-dom";
import ProductTable from "../../components/productDashboard/product-table.component";





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
