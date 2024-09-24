import { Button } from "flowbite-react";
import UserReview from "./product-single-review.component";
import { useReviews } from "../../services/queries/queries";

const ProductReview = ({ productId }: { productId: string }) => {
  const { data, hasNextPage, fetchNextPage } = useReviews(productId);
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Reviews
            </h2>
          </div>

          <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
            {data?.pages.map((page: any) =>
              page.result.map((review: any) => (
                <UserReview key={review._id} review={review} />
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
                No more Reviews to show
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductReview;
