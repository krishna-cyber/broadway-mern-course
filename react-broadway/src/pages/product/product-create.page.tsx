import { Button, Label, FileInput } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import httpService from "../../services/http.service";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ProductCreate = () => {
  let status = [
    { label: "active", value: "active" },
    { label: "inactive", value: "inactive" },
   
  ];
  const [loading, setLoading] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const navigate = useNavigate();
  const ProductCreateDTO = yup.object({
    title: yup
      .string()
      .min(3, "Title must be at least 3 charactes.")
      .max(50)
      .required(),
    description: yup.string().min(10).max(500).required(),
    // status: yup.string().oneOf(["active", "inactive"]).required(),
    status: yup.mixed().required(),
    image: yup.mixed().required(),
    price: yup.number().required("Price is required"),
    stock: yup.number().required(),
    discount: yup.number().required(),
  });
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductCreateDTO),
  });
  console.log("errors", errors);
  const onSubmit = async (data: any) => {
    console.log("Product create data:", data);
    // setLoading(true);
    // try {
    //   console.log("Product create data:", data);
    //   const response: any = await httpService.postRequest("/Product", data, {
    //     auth: true,
    //     file: true,
    //   });
    //   toast.success(response?.message);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    //   navigate("/admin/Product-lists");
    // }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create new Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <Label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Title
              </Label>

              <TextInputComponent
                name="title"
                control={control}
                placeholder="Product Title"
                errMsg={errors.title?.message}
              />
            </div>

            <div>
              <Label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                price
              </Label>

              <TextInputComponent
                name="price"
                type="number"
                control={control}
                placeholder="price[500]"
                errMsg={errors.price?.message}
              />
            </div>
            <div>
              <div>
                <Label htmlFor="image" value="Upload file" />
              </div>
              <FileInput
                onChange={(e: any) => setValue("image", e.target.files[0])}
                id="image"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
              />
              <span className=" text-red-500 text-sm">{errors.image?.message}</span>
            </div>
            <div>
              <Label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Discount
              </Label>
              <div className="max-w-md">
                <TextInputComponent
                  name="discount"
                  control={control}
                  placeholder="Discount"
                  errMsg={errors.discount?.message}
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                status
              </Label>
              <div className="max-w-md">
                <Controller
                  name="status"
                  control={control}
                  render={({ field,fieldState }) => (
                    <Select
                      {...field}
                      value={status.find((c) => c.value == fieldState)}
                      options={status}

                      onChange={(selectedOption:any) =>{

                        console.log(selectedOption.value) 
                        field.onChange(selectedOption.value)
                      }
                      } // Update the form state
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <div>
                <Label htmlFor="stock" value="stock" />
              </div>
              <TextInputComponent
                name="stock"
                control={control}
                placeholder="stock"
                errMsg={errors.stock?.message}
              />
            </div>
            <div>
              <Label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                categories
              </Label>
              <div className="max-w-md">
                {/* <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={colourOptions}
                /> */}
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </Label>

              <TextAreaComponent
                name="description"
                placeholder="Product description"
                control={control}
                errMsg={errors.description?.message}
              />
            </div>
          </div>
          <Button
            isProcessing={loading}
            disabled={loading}
            type="submit"
            color={""}
            size={"xs"}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            <GrSend className="mr-2 h-5 w-5" />
            Add new product
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ProductCreate;
