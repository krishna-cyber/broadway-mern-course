import { Rating } from "flowbite-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import dayjs from 'dayjs';

const UserReview = ({ review }) => {
  return (
    <div className="gap-3 py-6 sm:flex sm:items-start">
      <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
        <Rating>
          <Rating.Star filled={review.rating < 1 ? false : true} />
          <Rating.Star filled={review.rating < 2 ? false : true} />
          <Rating.Star filled={review.rating < 3 ? false : true} />
          <Rating.Star filled={review.rating < 4 ? false : true} />
          <Rating.Star filled={review.rating < 5 ? false : true} />
        </Rating>

        <div className="space-y-0.5">
          <p className="text-base font-semibold text-gray-900 dark:text-white">
            {review.reviewedBy.fullName}
          </p>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {dayjs(review.createdAt).format('MMMM D YYYY [at] HH:mm')}
          </p>
        </div>

        <div className="inline-flex items-center gap-1">
          <RiVerifiedBadgeFill color="blue" size={18} />
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Verified purchase
          </p>
        </div>
      </div>

      <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {review.text}
        </p>
        {review.image && (
          <div className="flex gap-2">
            <img
              className="h-32 w-20 rounded-lg object-cover"
              src={review.image}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReview;
