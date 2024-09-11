import ProductCardComponent from "./product-card.component";
import { Button } from "flowbite-react";
import { useProducts } from "../../services/queries/queries";

const ProductViewLandingPage = () => {
  const { hasNextPage, data, fetchNextPage,  isFetchingNextPage } =
    useProducts();

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-2">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="my-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Products
        </h2>

        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {data?.pages.map((page: any) =>
            page.result.map((product: any) => (
              <ProductCardComponent key={product._id} product={product} />
            ))
          )}
        </div>
       
        <div className="w-full items-center justify-center flex">
          {hasNextPage && (
            <Button
              size={"md"}
              className=" self-center border-gray-200 bg-white px-5 py-2.5  font-semibold text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              color={""}
              type="button"
              onClick={fetchNextPage}
            >
              {isFetchingNextPage ? "Loading..." : "Show More"}
            </Button>
          )}
          {!hasNextPage && (
            <Button
              size={"md"}
              className=" self-center border-gray-200 bg-white px-5 py-2.5  font-semibold text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              color={""}
              type="button"
              disabled
            >
              No more products to show
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductViewLandingPage;
