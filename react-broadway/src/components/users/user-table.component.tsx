import { Badge, Checkbox, Pagination, Table } from "flowbite-react";
import { useState } from "react";
import RowSkeleton from "../common/table/row-skeleton.component";

import TableActionButtons from "../common/table/table-action-buttons.component";
import { useFetchUsers } from "../../services/queries/queries";
import { useSelector } from "react-redux";
import { useDeleteUser } from "../../services/mutations/mutations";

const UserTable = () => {
  const {loggedInUser} = useSelector((state: any) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const deleteUser = useDeleteUser();

  const { data, isLoading, isError } = useFetchUsers(currentPage, 5);

  const onPageChange = (page: number) => setCurrentPage(page);

  // only triggers when currentPage changes otherwise it will not trigger , this callback prevents when some user click on same pagination
  // number it will not trigger the api call again

  // Delete banner
  const removeUser = async (id: string) => {
    deleteUser.mutate(id);
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>
          <Table.HeadCell>email</Table.HeadCell>
          <Table.HeadCell>phone</Table.HeadCell>
          <Table.HeadCell>createdBy</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isLoading ? (
            <RowSkeleton rows={4} cols={7} />
          ) : (
            <>
              {data?.result && data?.result.length > 0 ? (
                data?.result.map((data: any, index: number) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.fullName}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.role}
                    </Table.Cell>
                    <Table.Cell>
                      {data.status === "active" ? (
                        <Badge className="mx-auto w-fit" color="info">
                          Active
                        </Badge>
                      ) : (
                        <Badge className="mx-auto w-fit" color="pink">
                          Not Activated
                        </Badge>
                      )}{" "}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.email}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.phone?.length
                        ? data.phone.map((phone: any) => (
                            <span key={phone}>{phone}</span>
                          ))
                        : "Not Available"}
                    </Table.Cell>
                    <Table.Cell>
                      {data.createdBy || `Self Registration`}
                    </Table.Cell>

                    <Table.Cell className=" flex gap-3">
                      <TableActionButtons
                      disabled ={data.role=='admin'?true:false}
                        editUrl={`/${loggedInUser?.role}/banner/edit/${data._id}`}
                        deleteAction={removeUser}
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
            {data?.meta?.total || 0}
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

export default UserTable;
