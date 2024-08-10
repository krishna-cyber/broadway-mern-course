import { Rating } from 'flowbite-react'
import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";

const UserReview = () => {
  return (
    <div className="gap-3 py-6 sm:flex sm:items-start">
        <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            </Rating>

          <div className="space-y-0.5">
            <p className="text-base font-semibold text-gray-900 dark:text-white">Jese Leos</p>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">November 18 2023 at 15:35</p>
          </div>

          <div className="inline-flex items-center gap-1">
           
            <RiVerifiedBadgeFill color='blue' size={18}/>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Verified purchase</p>
          </div>
        </div>

        <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!</p>

          <div className="flex gap-2">
            <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
            <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
          </div>

        
        </div>
      </div>
  )
}

export default UserReview