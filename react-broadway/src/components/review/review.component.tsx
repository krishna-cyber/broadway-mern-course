import { Button, Dropdown, Modal } from "flowbite-react";
import  { useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const ReviewComponent = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
      <div className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
        <dl className="md:col-span-3 order-3 md:order-1">
          <dt className="sr-only">Product:</dt>
          <dd className="text-base font-semibold text-gray-900 dark:text-white">
            <a href="#" className="hover:underline">
              Apple iMac 27", M2 Max CPU 1TB HDD, Retina 5K{" "}
            </a>
          </dd>
        </dl>

        <dl className="md:col-span-6 order-4 md:order-2">
          <dt className="sr-only">Message:</dt>
          <dd className=" text-gray-500 dark:text-gray-400">
            It’s fancy, amazing keyboard, matching accessories. Super fast,
            batteries last more than usual, everything runs perfect in this...

            
            <div className="flex gap-2">
            <img className="h-20 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
          </div>
          </dd>
        </dl>
    
        

        <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
          <dl>
            <dt className="sr-only">Stars:</dt>
            <dd className="flex text-yellow-500 items-center space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
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
              <Button color="failure" onClick={() => setDeleteModal(false)}>
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
