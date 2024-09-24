import ReviewComponent from "../../components/review/review.component";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import {
  useFetchReviews,
  useFetchReviewsForUser,
} from "../../services/queries/queries";
import { useSelector } from "react-redux";

export const ReviewsHistory = () => {
  const {loggedInUser} = useSelector((state: any) => state.user);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading,iserror } = useFetchReviewsForUser(currentPage, 10, loggedInUser.id);


  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                My reviews
              </h2>
            
            </div>

            <div className="mt-6 flow-root sm:mt-8">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">

              {
                iserror && <div className="text-center text-red-500">Something went wrong</div>
              }

              {
                isLoading && <div className="text-center">Loading...</div>
              }

{data?.result && data?.result.map((review:any)=>( <ReviewComponent key={review.id} review={review} />))}

             
              </div>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={data?.meta?.totalPages || 0}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};
