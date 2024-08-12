import { Badge, Checkbox, Pagination, Table } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import RowSkeleton from "../common/table/row-skeleton.component";
import { toast } from "react-toastify";
import authServiceInstance from "../../pages/auth/auth.service";
import { SearchParams } from "../../config/constants";

import TableActionButtons from "../common/table/table-action-buttons.component";
import { NavLink } from "react-router-dom";

const ProductTable = () => {
  const [bannerData, setBannerData] = useState([
    {
      id: "001",
      title: "Wireless Bluetooth Headphones",
      imageLink: "https://example.com/images/headphones.jpg",
      status: "active",
      price: 79.99,
      discount: 20,
      description:
        "Experience high-quality sound with our wireless Bluetooth headphones. Designed for comfort and style, these headphones offer up to 20 hours of playtime on a single charge. Perfect for music lovers on the go.",
    },
    {
      id: "002",
      title: 'Smart LED TV 55"',
      imageLink: "https://example.com/images/smart_tv.jpg",
      status: "active",
      price: 499.99,
      discount: 15,
      description:
        "Enjoy stunning visuals and smart features with our 55\" Smart LED TV. With 4K resolution, HDR support, and built-in streaming apps, it's the ultimate entertainment hub for your living room.",
    },
    {
      id: "003",
      title: "Stainless Steel Water Bottle",
      imageLink: "https://example.com/images/water_bottle.jpg",
      status: "inactive",
      price: 24.99,
      discount: 10,
      description:
        "Stay hydrated with our durable stainless steel water bottle. With double-wall insulation, it keeps your drinks cold for up to 24 hours and hot for up to 12 hours. Perfect for outdoor activities and everyday use.",
    },
    {
      id: "004",
      title: "Gaming Laptop",
      imageLink: "https://example.com/images/gaming_laptop.jpg",
      status: "active",
      price: 1299.99,
      discount: 5,
      description:
        "Power through your games with our high-performance gaming laptop. Equipped with the latest GPU, Intel i7 processor, and 16GB RAM, it delivers smooth gameplay and quick load times for all your favorite titles.",
    },
    {
      id: "005",
      title: "Ergonomic Office Chair",
      imageLink: "https://example.com/images/office_chair.jpg",
      status: "inactive",
      price: 199.99,
      discount: 25,
      description:
        "Sit comfortably all day with our ergonomic office chair. Designed with adjustable lumbar support and breathable mesh, it's perfect for long hours of work or study.",
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
        const banners: any = await authServiceInstance.getRequest("/banner", {
          auth: true,
          params: { page: page, limit: limit, search: search },
        });
        setBannerData(banners?.result);
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
      const response = await authServiceInstance.deleteRequest(
        `/banner/${id}`,
        {
          auth: true,
        }
      );
      console.log("Delete banner response: ", response);
      toast.success("Banner deleted successfully");
      getAllBanners({});
    } catch (error: any) {
      console.error("Error deleting banner: ", error);
      toast.warning("Error deleting banner, please try again");
    }
  };

  useEffect(() => {
    getAllBanners({});
  }, []);

  return (
    <div className="overflow-x-auto">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>Discount</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {loading ? (
            <RowSkeleton rows={4} cols={5} />
          ) : (
            <>
              {bannerData && bannerData.length > 0 ? (
                bannerData.map((data: any, index: number) => (
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
                      {data.status === "active" ? (
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
            1-10
          </span>
          of
          <span className="font-semibold mx-2 text-gray-900 dark:text-white">
            1000
          </span>
        </span>

        <Pagination
          currentPage={1}
          totalPages={0}
          onPageChange={onPageChange}
          showIcons
        />
      </nav>
    </div>
  );
};

export default ProductTable;