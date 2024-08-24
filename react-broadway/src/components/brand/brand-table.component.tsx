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
import { useFetchBrandsForTable } from "../../services/queries/queries";

const BrandTable = () => {
  const [brandData, setBrandData] = useState([
    {
      _id: "someid",
      title: "Banner Image",
      image:
        "https://icms-image.slatic.net/images/ims-web/d01caa71-9c68-4c12-a35e-f6c10c53e73d.jpg",
      link: null,
      status: "active",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


  const onPageChange = (page: number) => setCurrentPage(page);

  // only triggers when currentPage changes otherwise it will not trigger , this callback prevents when some user click on same pagination
  // number it will not trigger the api call again
  const getAllBanners = useCallback(
    async ({ page = 1, limit = 10, search = "" }: SearchParams) => {
      setLoading(true);
      try {
        const banners:any = await httpService.getRequest("/banner", {
          auth: true,
          params: { page: page, limit: limit, search: search },
        });
        setBrandData(banners?.result);
        console.log({ page, limit, search });
        console.log("Banners: ", banners);
      } catch (error: any) {
        console.error("Error fetching banners: ", error);
        toast.warning(error?.message);
      } finally {
        setLoading(false);
      }
    },
    [currentPage]
  );

  // Delete banner
  const deleteBanner = async (id: string) => {
    try {
      const response = await httpService.deleteRequest(`/banner/${id}`, {
        auth: true,
      });
      console.log("Delete banner response: ", response);
      toast.success("Banner deleted successfully");
      getAllBanners({});
    } catch (error: any) {
      console.error("Error deleting banner: ", error);
      toast.warning('Error deleting banner, please try again');
    }
  };

const {data,isLoading,isError} = useFetchBrandsForTable();
console.log(data,isLoading,isError)

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
          {isError && <Table.Cell
                  colSpan={6}
                  className="whitespace-nowrap font-medium text-center  text-gray-900 dark:text-white"
                >
                  Error on Fetching Brand details
                </Table.Cell>}
          {isLoading  ? (
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
                      <img className=" w-40 h-16 " src={data.image} />
                      </NavLink>
                    </Table.Cell>
                    <Table.Cell>{data.link || `No link avilable`}</Table.Cell>
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
                    <Table.Cell>{data.createdBy?.fullName || `Self Registered`}</Table.Cell>
                    <Table.Cell className=" flex gap-3">
                      <TableActionButtons editUrl={`/admin/banner/edit/${data._id}`} deleteAction={deleteBanner} rowId={data._id} />
                    
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
          totalPages={data?.meta.totalPages|1}
          onPageChange={onPageChange}
          showIcons
        />
      </nav>
   
     
       
    </div>
  );
};

export default BrandTable;
