import { Avatar, Badge, Pagination, Table } from "flowbite-react";
import React, { useState } from "react";
import RowSkeleton from "../../components/common/table/row-skeleton.component";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import { useSelector } from "react-redux";
import {
  useFetchOrderedProducts,
  useFetchOrdersList,
} from "../../services/queries/queries";
import { orderedProductList } from "../../services/api/api";
import ProductReviewForm from "../../components/products/product-review-form.component";

const OrderedProductList = () => {
  const { loggedInUser } = useSelector((state: any) => state.user);

  const [page, setpage] = useState(1);
  const { data, isLoading, isError } = useFetchOrderedProducts(
    page,
    5,
    loggedInUser.id
  );
  console.log(`data`, data);

  const onPageChange = (page: number) => setpage(page);

  if (isError) {
    console.log(`Error: `, isError);
  }

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell>ProductId</Table.HeadCell>
          <Table.HeadCell>ProductName</Table.HeadCell>
          <Table.HeadCell>OrderedOn</Table.HeadCell>
          <Table.HeadCell>ProductImage</Table.HeadCell>
          <Table.HeadCell>StockAvilable</Table.HeadCell>
          <Table.HeadCell>WriteReview</Table.HeadCell>
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
                      <Link
                        to={`/${loggedInUser.role}/order/${data._id}`}
                        className="flex-1"
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {data._id}
                        </Table.Cell>
                      </Link>

                      
                      <Table.Cell>{data.title}</Table.Cell>
                      <Table.Cell>
                        {dayjs
                          .default(data.result?.createdAt)
                          .format("DD-MM-YYYY")}
                      </Table.Cell>
                      <Table.Cell>
                        <Avatar img={data.image} size="md" bordered />
                      </Table.Cell>
                      <Table.Cell>{data.stock}</Table.Cell>
                      <Table.Cell><ProductReviewForm product={data}/></Table.Cell>
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

export default OrderedProductList;
