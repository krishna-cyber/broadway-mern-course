import { Button, FileInput, Label, Modal, Rating } from "flowbite-react";
import React, { useState } from "react";

const ProductReviewForm = () => {
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)} color={"blue"}>
        write a review
      </Button>
 
      <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
        <Modal.Header>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
            Add a review for:
          </h3>
          <a
            href="#"
            className="font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD
          </a>
        </Modal.Header>
        <Modal.Body>
          <form className="p-4 md:p-5">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Rating size={"lg"}>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                    5.0{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      (out of 5)
                    </span>
                  </p>
                </Rating>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Review title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Review description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                ></textarea>
                <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                  Problems with the product or delivery?{" "}
                  <a
                    href="#"
                    className="text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Send a report
                  </a>
                  .
                </p>
              </div>
              <div className="flex col-span-2 w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput id="dropzone-file" className="hidden" />
                </Label>
              </div>
            
              <div className="col-span-2">
                <div className="flex items-center">
                  <input
                    id="review-checkbox"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="review-checkbox"
                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    By publishing this review you agree with the{" "}
                    <a
                      href="#"
                      className="text-primary-600 hover:underline dark:text-primary-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className=" gap-3">
          <Button color={"blue"} size={"md"}>
            Add review
          </Button>
          <Button color={"gray"} onClick={onCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductReviewForm;
