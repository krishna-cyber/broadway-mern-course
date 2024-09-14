import { Badge, Checkbox, Pagination, Table } from "flowbite-react";
import {   useState } from "react";
import RowSkeleton from "../common/table/row-skeleton.component";
import TableActionButtons from "../common/table/table-action-buttons.component";
import { NavLink } from "react-router-dom";
import { useFetchProductsForTable } from "../../services/queries/queries";
import { useDeleteProduct } from "../../services/mutations/mutations";
import { useSelector } from "react-redux";

const ProductTable = () => {
  const {loggedInUser} = useSelector((state: any) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const { data,isLoading } = useFetchProductsForTable(currentPage, 5);
  const deleteProduct = useDeleteProduct();


  const paginationChange = (page: number) => {
    setCurrentPage(page);
  };



  // Delete PRODUCT
  const deleteById = async (id: string) => {
   deleteProduct.mutate(id);
  };

 

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        {" "}
        <Table.Head>
          <Table.HeadCell>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>Discount</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isLoading ? (
            <RowSkeleton rows={4} cols={5} />
          ) : (
            <>
              {data?.result && data?.result.length > 0 ? (
                data?.result.map((data: any, index: number) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap font-semibold text-slate-700 dark:text-white">
                      {data.title}
                    </Table.Cell>

                    <Table.Cell>
                      <NavLink to={data.image} target="_data.image">
                        <img className=" w-40 h-16 " src={data.image} />
                      </NavLink>
                    </Table.Cell>
                    <Table.Cell>
                      {data.status === "ACTIVE" ? (
                        <Badge className="mx-auto w-fit" color="info">
                          Published
                        </Badge>
                      ) : (
                        <Badge className="mx-auto w-fit" color="pink">
                          Unpublished
                        </Badge>
                      )}{" "}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Rs. {data.price}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.stock} avilable
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.discount}% off
                    </Table.Cell>
                    <Table.Cell className=" flex gap-3">
                      <TableActionButtons
                        editUrl={`/${loggedInUser?.role}/product/edit/${data.title}`}
                        deleteAction={deleteById}
                        rowId={data._id}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Cell
                  colSpan={7}
                  className="whitespace-nowrap font-medium text-center  text-gray-900 dark:text-white"
                >
                  No Data Avilable
                </Table.Cell>
              )}
            </>
          )}
        </Table.Body>
      </Table>
      <nav
        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold mx-2 text-gray-900 dark:text-white">
            1-5
          </span>
          of
          <span className="font-semibold mx-2 text-gray-900 dark:text-white">
            {data?.meta.total || 1}
          </span>
        </span>

        <Pagination
          currentPage={currentPage}
          totalPages={data?.meta?.totalPages || 1}
          onPageChange={paginationChange}
          showIcons
        />
      </nav>
    </div>
  );
};

export default ProductTable;
