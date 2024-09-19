import { useParams } from "react-router-dom"
import ReviewComponent from "../../components/review/review.component"
import { Pagination } from "flowbite-react"
import { useState } from "react";

export const ReviewsHistory = () => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
 
  return (
    <>
<section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-5xl">
      <div className="gap-4 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">My reviews</h2>
        <div className="mt-6 sm:mt-0">
          <label htmlFor="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select review type</label>
          <select id="order-type" className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
            <option selected>All reviews</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flow-root sm:mt-8">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
         <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
        </div>
      </div>

     
  <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
  </div>
</section>


    </>
  )
}
