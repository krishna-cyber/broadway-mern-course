import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, FileInput, Label, Modal, Rating } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { checkIfFilesAreCorrectType, checkIfFilesAreTooBig } from "../../utils";

import { GrUpload } from "react-icons/gr";

type Inputs = {
  title: string;
  description: string;
  reviewCheckbox?: boolean | undefined;
  image?: any[] | undefined;
};

const schema = yup
  .object({
    description: yup
      .string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    reviewCheckbox: yup
      .boolean()
      .optional()
      .oneOf([true], "You must accept the terms and conditions"),
    image: yup
      .array()

      .test(
        "is-valid-type",
        "Not a valid image type",
        checkIfFilesAreCorrectType
      )
      .test(
        "is-valid-size",
        "Max allowed size is 100KB",
        checkIfFilesAreTooBig
      ),
  })
 

const ProductReviewForm = ({product}) => {
  const [rating,setRating] = useState(5);
  const [files, setFiles] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => console.log(data);
  const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
  }
 
  return (
    <>
      <Button onClick={() => setOpenModal(true)} color={"blue"} size={"xs"}>
        write a review
      </Button>

      <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
        <Modal.Header>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-white">
            Add a review for:
          </h3>
          <p className="font-medium text-primary-700 hover:underline dark:text-primary-500">
          {product.title}
          </p>
        </Modal.Header>
        <Modal.Body>
          <form
            id="review-form"
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:p-5"
          >
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Rating size={"lg"}>
                  <Rating.Star onClick={()=>{setRating(1)}} filled={rating<1?false:true} />
                  <Rating.Star onClick={()=>{setRating(2)}} filled={rating<2?false:true} />
                  <Rating.Star onClick={()=>{setRating(3)}} filled={rating<3?false:true} />
                  <Rating.Star onClick={()=>{setRating(4)}} filled={rating<4?false:true} />
                  <Rating.Star onClick={()=>{setRating(5)}} filled={rating<5?false:true} />
                  <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                   {rating}{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      (out of 5)
                    </span>
                  </p>
                </Rating>
              </div>
             
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Review description
                </label>
                <textarea
                  {...register("description")}
                  id="description"
                  rows={6}
                  className={
                    errors.description
                      ? "mb-2 block w-full rounded-lg border border-red-500 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      : "mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  }
                ></textarea>
                <span className=" text-sm italic text-red-800">
                  {errors.description?.message}
                </span>
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
                  className={
                    errors.image
                      ? "mb-2 block w-full rounded-lg border border-red-500 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      : "mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  }
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <GrUpload className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput
                    onChange={(e: any) => {
                      const image = e.target.files["0"];
                      let images = [];
                      images.push(image)
                      setFiles(images);
                      setValue("image", images);
                    }}
                    id="dropzone-file"
                    className="hidden"
                  />
               
  

                  <span className=" text-sm italic text-red-800">
                    {errors.image?.message}
                  </span>
                </Label>
                {files && files.length > 0 && (
                  <Avatar size={"xl"} img={URL.createObjectURL(files[0])} alt="preview" />
             
            )}
              </div>

              <div className="col-span-2">
                <div className="flex items-center">
                  <input
                    {...register("reviewCheckbox")}
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
                    .<br />
                    <span className=" text-sm italic text-red-800">
                      {errors.reviewCheckbox?.message}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className=" gap-3">
          <Button color={"blue"} size={"sm"} type="submit" form="review-form">
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
