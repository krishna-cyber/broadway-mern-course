import { Badge, Checkbox, Pagination, Table } from "flowbite-react";
import {  useState } from "react";
import RowSkeleton from "../common/table/row-skeleton.component";


import TableActionButtons from "../common/table/table-action-buttons.component";
import { NavLink } from "react-router-dom";
import { useFetchBrandsForTable } from "../../services/queries/queries";
import { useDeleteBrand } from "../../services/mutations/mutations";

const BrandTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useFetchBrandsForTable(currentPage,5);
  const deleteBrand = useDeleteBrand();


  const onPageChange = (page: number) => setCurrentPage(page);

  // Delete banner
  const deleteBanner = async (id: number) => {
    deleteBrand.mutate(id);
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>CreatedBy</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isError && (
            <Table.Cell
              colSpan={6}
              className="whitespace-nowrap font-medium text-center  text-gray-900 dark:text-white"
            >
              Error on Fetching Brand details
            </Table.Cell>
          )}
          {isLoading ? (
            <RowSkeleton rows={4} cols={7} />
          ) : (
            <>
              {data.result && data.result?.length > 0 ? (
                data.result?.map((data: any, index: number) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.title}
                    </Table.Cell>
                    <Table.Cell>
                      <NavLink to={data.image} target="_data.image">
                        <img className=" w-8 h-8 " src={data.image} />
                      </NavLink>
                    </Table.Cell>
                    <Table.Cell>{data.link || `No link avilable`}</Table.Cell>
                    <Table.Cell>
                      {data.status === "ACTIVE" ||"active" ? (
                        <Badge className="mx-auto w-fit" color="info">
                          Published
                        </Badge>
                      ) : (
                        <Badge className="mx-auto w-fit" color="pink">
                          Unpublished
                        </Badge>
                      )}{" "}
                    </Table.Cell>
                    <Table.Cell>
                      {data.createdBy?.fullName || `Self Registered`}
                    </Table.Cell>
                    <Table.Cell className=" flex gap-3">
                      <TableActionButtons
                        editUrl={`/admin/banner/edit/${data._id}`}
                        deleteAction={deleteBanner}
                        rowId={data._id}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))
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
            {data?.meta?.total}
          </span>
        </span>

        <Pagination
          currentPage={currentPage}
          totalPages={data?.meta?.totalPages || 1}
          onPageChange={onPageChange}
          showIcons
        />
      </nav>
    </div>
  );
};

export default BrandTable;
