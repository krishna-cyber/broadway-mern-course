
import OrderTable from "../../components/orders/order-table.component";
import { useFetchOrdersList } from "../../services/queries/queries";




const OrderList = () => {
  
  const {data,isLoading,isError} = useFetchOrdersList();
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5 className="text-2xl font-semibold">
                <span className="text-gray-500 ">All orders:</span>
                <span className="dark:text-white">{data?.meta?.total}</span>
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
