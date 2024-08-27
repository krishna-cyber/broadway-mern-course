import {
  Badge,
  Checkbox,
  Pagination,
  Table,
} from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import RowSkeleton from "../common/table/row-skeleton.component";
import { toast } from "react-toastify";
import httpService from "../../services/http.service";
import { SearchParams } from "../../config/constants";

import TableActionButtons from "../common/table/table-action-buttons.component";
import { NavLink } from "react-router-dom";
import { useFetchCategoryForTable } from "../../services/queries/queries";
import { useDeleteCategory } from "../../services/mutations/mutations";

const CategoryTable = () => {

  const [currentPage, setCurrentPage] = useState(1);

const categoryList = useFetchCategoryForTable(currentPage,5);
const deleteBanner = useDeleteCategory()
  const onPageChange = (page: number) => setCurrentPage(page);



  // Delete banner
  const deleteCategory = async (id: string) => {
  deleteBanner.mutate(id)
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
          <Table.HeadCell>TotalProducts</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {categoryList.isLoading ? (
            <RowSkeleton rows={4} cols={5} />
          ) : (
            <>
              {categoryList.data?.result && categoryList.data?.result.length > 0 ? (
                categoryList.data?.result.map((data: any, index: number) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {data.name}
                    </Table.Cell>
                    <Table.Cell>{data?.link || `No link avilable`}</Table.Cell>
                    <Table.Cell>{`No Products avilable`}</Table.Cell>
                    <Table.Cell>
                      <NavLink to={data?.image} target="_data?.image">
                      <img className=" w-20 h-20 " src={data?.image} />
                      </NavLink>
                    </Table.Cell>
                
                    <Table.Cell className=" flex gap-3">
                      <TableActionButtons editUrl={`/admin/banner/edit/${data?._id}`} deleteAction={deleteCategory} rowId={data?._id} />
                    
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
            1-5
          </span>
          of
          <span className="font-semibold mx-2 text-gray-900 dark:text-white">
           {categoryList.data?.meta.total}
          </span>
        </span>

        <Pagination
          currentPage={currentPage}
          totalPages={categoryList.data?.meta.totalPages || 1}
          onPageChange={onPageChange}
          showIcons
        />
      </nav>
   
     
       
    </div>
  );
};

export default CategoryTable;
