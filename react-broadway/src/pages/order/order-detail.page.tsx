import { Link, useParams } from "react-router-dom";
import OrderSummary from "../../components/orders/order-summary.component";
import { useFetchOrderById } from "../../services/queries/queries";
import { Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const OrderDetail = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const { loggedInUser } = useSelector((state: any) => state.user);
  const { data, isError, isPending } = useFetchOrderById(params.id);

  return (
    <>
      <section className="bg-white flex justify-between py-8 antialiased dark:bg-gray-900 md:py-16">
        {/* <form action="#" className="mx-auto max-w-screen-xl w-[50%] px-4 2xl:px-0"> */}
        <form
          action="#"
          className={
            loggedInUser.role == "admin"
              ? `max-w-screen-xl w-[50%] px-4 2xl:px-0`
              : "mx-auto max-w-screen-xl w-full px-4 2xl:px-0"
          }
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Order summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Billing & Delivery information
              </h4>

              <dl>
                <dt className="text-base font-medium text-gray-900 dark:text-white">
                  Individual
                </dt>
                <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  Bonnie Green - +1 234 567 890, San Francisco, California,
                  United States, 3454, Scott Street
                </dd>
              </dl>
            </div>

            <div className="mt-6 sm:mt-8">
              <OrderSummary items={data?.result.items} />

              <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </h4>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {data?.result?.totalAmount}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${data?.result?.storePickUp}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${data?.result?.taxAmount}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 dark:text-white">
                      ${data?.result.totalAmount}
                    </dd>
                  </dl>
                </div>

                <div className="gap-4 sm:flex sm:items-center">
                  <Link className=" w-full" to="/">
                    <Button
                      color={""}
                      className="w-full   border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      Return to Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>

        {loggedInUser.role == "admin" && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto w-[30%] max-w-screen-xl  px-4 2xl:px-0"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Order Processing
                {data?.result.orderStatus === "delivered"  && (
                  <span className="text-green-500 dark:text-green-500"> Already  Delivered Not avilable for processing</span>
                )}  
             
                {data?.result.orderStatus === "cancelled"  && (
                  <span className="text-red-500 dark:text-red-500"> Order is Cancelled Not avilable for processing </span>
                )}  
              </h2>

              <div className="mt-6 sm:mt-8">
                <div className="mt-4 space-y-6">
                  <input
                    type="text"
                    disabled
                    placeholder="Enter Tracking Number"
                    className="border border-gray-200 dark:border-gray-700 w-full px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary-500 dark:focus:ring-gray-700"
                  />

                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Status
                  </label>
                  <select
                    defaultChecked={data?.result.orderStatus}
                    {...register("orderStatus")}
                    className="border border-gray-200 dark:border-gray-700 w-full px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary-500 dark:focus:ring-gray-700"
                  >
                    <option value="confirmed">confirmed</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>

                  <label htmlFor="paymentStatus">Payment Status</label>
                  <select
                    {...register("paymentStatus")}
                    className="border border-gray-200 dark:border-gray-700 w-full px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary-500 dark:focus:ring-gray-700"
                  >
                    <option defaultChecked={data?.result.paymentStatus=="unpaid"?true:false} value="unpaid">unpaid</option>
                    <option defaultChecked={data?.result.paymentStatus=="paid"?true:false} value="paid">
                      Paid
                    </option>
                  </select>

                  <div className="gap-4 sm:flex sm:items-center">
                    <Button
                      type={"submit"}
                      color={"blue"}
                      disabled={
                        data?.result.orderStatus === "delivered" ||
                        data?.result.orderStatus === "cancelled"
                      }
                    >
                      Update Order
                    </Button>
                    <Button color={"failure"}   disabled={
                        data?.result.orderStatus === "delivered" ||
                        data?.result.orderStatus === "cancelled"
                      }>Cancel Order</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
};
