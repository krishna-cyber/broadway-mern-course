import {  Button, Checkbox, Pagination, Table } from "flowbite-react";
import RowSkeleton from "../common/table/row-skeleton.component";

import { useState } from "react";
import { DateTime } from "luxon";
import { useFetchOrdersList } from "../../services/queries/queries";

const OrderTable = () => {
  const [page, setpage] = useState(1);
  const {data,isLoading,isError} = useFetchOrdersList();
  const sampleOrders = [
    {
      orderId: "ORD123456",
      placedOn: "2023-10-01T10:30:00Z",
      totalItems: 3, // 2 Wireless Headphones + 1 Bluetooth Speaker
      total: 500.0,
    },
    {
      orderId: "ORD123457",
      placedOn: "2023-10-02T12:15:00Z",
      totalItems: 3, // 3 Smartphones
      total: 225.0,
    },
    {
      orderId: "ORD123458",
      placedOn: "2023-10-03T14:45:00Z",
      totalItems: 3, // 1 Laptop + 2 Mice
      total: 400.0,
    },
    {
      orderId: "ORD123459",
      placedOn: "2023-10-04T09:00:00Z",
      totalItems: 6, // 5 Gaming Consoles + 1 Game Controller
      total: 200.0,
    },
  ];

  console.log(sampleOrders);

  const onPageChange = (page: number) => setpage(page);

  if (isError) {
    console.log(`Error: `, isError);
  }

 

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>OrderID</Table.HeadCell>
          <Table.HeadCell>Placed on</Table.HeadCell>
          <Table.HeadCell>Items</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {isLoading ? (
            <RowSkeleton rows={4} cols={5} />
          ) : (
            <>
              {data && data?.length > 0 ? (
                data?.map((data, index: number) => {
                  const placedOnDate = DateTime.fromISO(data.placedOn);

                  return (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data.orderId}
                      </Table.Cell>
                      <Table.Cell>
                        {placedOnDate.toLocaleString(DateTime.DATETIME_MED)}
                      </Table.Cell>
                      <Table.Cell>{data.totalItems}</Table.Cell>
                      <Table.Cell>{data.total}</Table.Cell>
                      <Table.Cell className=" flex gap-3">
                        <Button
                          color={"green"}
                          type={"button"}
                          className=" bg-green-600 w-fit text-white hover:text-black"
                        >
                        Manage
                        </Button>
                      </Table.Cell>
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
