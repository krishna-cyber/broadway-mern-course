import { Badge, Button, Checkbox, Pagination, Table } from "flowbite-react";
import RowSkeleton from "../common/table/row-skeleton.component";
import { Avatar } from "flowbite-react";
import * as dayjs from "dayjs";

import { useState } from "react";
import { useFetchOrdersList } from "../../services/queries/queries";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OrderTable = () => {
  const { loggedInUser } = useSelector((state: any) => state.user);
  const [page, setpage] = useState(1);
  const { data, isLoading, isError } = useFetchOrdersList(page, 5);


  const onPageChange = (page: number) => setpage(page);


  if (isError) {
    console.log(`Error: `, isError);
  }

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell>OrderID</Table.HeadCell>
          <Table.HeadCell>Placed on</Table.HeadCell>
          <Table.HeadCell>Items</Table.HeadCell>
          <Table.HeadCell>TotalItems</Table.HeadCell>
          <Table.HeadCell>TotalAmount</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>PaymentMethod</Table.HeadCell>
          <Table.HeadCell>PaymentStatus</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {isLoading ? (
            <RowSkeleton rows={4} cols={7} />
          ) : (
            <>
              {data && data?.result.length > 0 ? (
                data?.result.map((data, index: number) => {
                  return (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Link to={`/${loggedInUser.role}/order/${data._id}`} className="flex-1">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {data._id}
                        </Table.Cell>
                      </Link>

                      <Table.Cell>
                        {dayjs
                          .default(data.result?.createdAt)
                          .format("DD-MM-YYYY")}
                      </Table.Cell>
                      <Table.Cell>
                        {data.items.length > 3 ? (
                          <Avatar.Group>
                            <Avatar
                              img={data.items[0].productId?.image}
                              rounded
                              stacked
                            />
                            <Avatar
                              img={data.items[1].productId?.image}
                              rounded
                              stacked
                            />
                            <Avatar
                              img={data.items[2].productId?.image}
                              rounded
                              stacked
                            />
                            <Avatar.Counter
                              total={data.items.length}
                              href="#"
                            />
                          </Avatar.Group>
                        ) : (
                          <Avatar.Group>
                            {data.items.map((item: any, index: number) => {
                              return (
                                <Avatar
                                  key={index}
                                  img={item.productId?.image}
                                  size={"md"}
                                  stacked
                                />
                              );
                            })}
                          </Avatar.Group>
                        )}
                      </Table.Cell>
                      <Table.Cell>{data.totalItems}</Table.Cell>
                      <Table.Cell>{data.totalAmount}</Table.Cell>
                      <Table.Cell className=" flex gap-3">
                        {data.orderStatus === "confirmed" ? (
                          <Badge color="purple">confirmed</Badge>
                        ) : data.orderStatus === "shipped" ? (
                          <Badge color="blue">Processing</Badge>
                        ) : data.orderStatus === "delivered" ? (
                          <Badge color={"success"}>Delivered</Badge>
                        ) : (
                          <Badge color="failure">Cancelled</Badge>
                        )}
                      </Table.Cell>
                      <Table.Cell>{data.paymentType}</Table.Cell>
                      <Table.Cell>{data.paymentStatus}</Table.Cell>
                    </Table.Row>
                  );
                })
              ) : (
                <Table.Cell
                  colSpan={6}
                  className="whitespace-nowrap font-medium text-center  text-gray-900 dark:text-white"
                >
                  No Data Avilable
                </Table.Cell>
              )}
            </>
          )}
        </Table.Body>
      </Table>

      {/* Pagination section */}
      <nav
        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold mx-2 text-gray-900 dark:text-white">
            1-10
          </span>
          of
          <span className="font-semibold mx-2 text-gray-900 dark:text-white">
            {data?.meta?.total || 0}
          </span>
        </span>

        <Pagination
          currentPage={page}
          totalPages={data?.meta?.totalPages || 1}
          onPageChange={onPageChange}
          showIcons
        />
      </nav>
    </div>
  );
};

export default OrderTable;
