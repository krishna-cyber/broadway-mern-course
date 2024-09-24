import { Button, Dropdown, Modal, Rating } from "flowbite-react";
import  { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDeleteReview } from "../../services/mutations/mutations";

const ReviewComponent = ({review}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const deleteReview = useDeleteReview();
  const handleDelete = () => {
    setDeleteModal(false);
    deleteReview.mutate(review._id);
  };
  return (
    <>
      <div className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
        <dl className="md:col-span-3 order-3 md:order-1">
          <dt className="sr-only">Product:</dt>
          <dd className="text-base font-semibold text-gray-900 dark:text-white">
            <Link to={`/product/${review.reviewedFor.title}`} className="hover:underline">
             {review.reviewedFor.title}{" "}
            </Link>
          </dd>
        </dl>

        <dl className="md:col-span-6 order-4 md:order-2">
          <dt className="sr-only">Message:</dt>
          <dd className=" text-gray-500 dark:text-gray-400">
          {review.text}

            {review.image &&<div className="flex gap-2">
            <img className="h-32 w-20 rounded-lg object-cover" src={review.image} alt="" />
          </div> }
            
          </dd>
        </dl>
    
        

        <div className="md:col-span-3 content-center order-1 md:order-3 flex items-start justify-between">
          <dl>
            <dt className="sr-only">Stars:</dt>

            <dd className="flex mt-2 space-x-1">
            <Rating>
              <Rating.Star filled={review.rating<1?false:true} />
              <Rating.Star filled={review.rating<2?false:true} />
              <Rating.Star filled={review.rating<3?false:true} />
              <Rating.Star filled={review.rating<4?false:true} />
              <Rating.Star filled={review.rating<5?false:true} />
            </Rating>
              
            </dd>
          </dl>

          <Dropdown
            color={""}
            className="p-0"
            arrowIcon={false}
            label={<p>...</p>}
          >
            <Dropdown.Item disabled className=" text-green-400">
              {" "}
              <LuClipboardEdit className="mr-2" /> Edit review
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setDeleteModal(true);
              }}
              className="text-red-400"
            >
              {" "}
              <MdDeleteOutline className=" mr-2 text-xl" /> Delete review
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <Modal
        show={deleteModal}
        size="md"
        onClose={() => setDeleteModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <RiDeleteBinLine className=" text-9xl" />
            </div>
            <h3 className="mb-5 text-md font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this review?
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setDeleteModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default ReviewComponent;
