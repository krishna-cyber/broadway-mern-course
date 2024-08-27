import { Badge, Checkbox, Pagination, Table } from "flowbite-react";
import RowSkeleton from "../common/table/row-skeleton.component";

import TableActionButtons from "../common/table/table-action-buttons.component";
import { NavLink } from "react-router-dom";
import { useFetchBannersForTable } from "../../services/queries/queries";
import { useState } from "react";
import { useDeleteBanner } from "../../services/mutations/mutations";

const BannerTable = () => {
  const [page, setpage] = useState(1);
  const bannersDataForTable = useFetchBannersForTable(page, 5); //current page and limit
  const deleteBannerById = useDeleteBanner();

  const onPageChange = (page: number) => setpage(page);

  if (bannersDataForTable.isError) {
    console.log(`Error: `, bannersDataForTable.error);
  }

  // Delete banner
  const deleteBanner = async (id: string) => {
    deleteBannerById.mutate(id);
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {bannersDataForTable.isLoading ? (
            <RowSkeleton rows={4} cols={5} />
          ) : (
            <>
              {bannersDataForTable.data?.result &&
              bannersDataForTable.data?.result.length > 0 ? (
                bannersDataForTable.data?.result.map(
                  (data: any, index: number) => (
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
                      <Table.Cell>{data.link || `No link avilable`}</Table.Cell>
                      <Table.Cell>
                        <NavLink to={data.image} target="_data.image">
                          <img className=" w-40 h-16 " src={data.image} />
                        </NavLink>
                      </Table.Cell>
                      <Table.Cell>
                        {data.status === "ACTIVE" || "active" ? (
                          <Badge className="mx-auto w-fit" color="info">
                            Published
                          </Badge>
                        ) : (
                          <Badge className="mx-auto w-fit" color="pink">
                            Unpublished
                          </Badge>
                        )}{" "}
                      </Table.Cell>
                      <Table.Cell className=" flex gap-3">
                        <TableActionButtons
                          editUrl={`/admin/banner/edit/${data._id}`}
                          deleteAction={deleteBanner}
                          rowId={data._id}
                        />
                      </Table.Cell>
                    </Table.Row>
                  )
                )
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
            {bannersDataForTable.data?.meta?.total || 0}
          </span>
        </span>

        <Pagination
          currentPage={page}
          totalPages={bannersDataForTable.data?.meta?.totalPages || 1}
          onPageChange={onPageChange}
          showIcons
        />
      </nav>
    </div>
  );
};

export default BannerTable;
