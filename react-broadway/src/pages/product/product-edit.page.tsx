import { Button, Label, FileInput, Select } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingPage from "../loading/loading.page";
import { useFetchAllCategories } from "../../services/queries/queries";
import { useCreateProduct } from "../../services/mutations/mutations";

const ProductEdit = () => {
  const params = useParams();
  const categories = useFetchAllCategories();
  const categoryOptions = (categories.data?.result) ? (categories.data?.result.map((c)=>{
    return {label:c.name,value:c.id}
  })) : [];
  const [loading,setLoading]  = useState(false);
  const ProductEditDTO = yup.object({
    title: yup
      .string()
      .min(3, "Title must be at least 3 charactes.")
      .max(50)
      .optional(),
    description: yup.string().min(10).max(500).optional(),
    price: yup.number().optional(),
    stock: yup.number().optional(),
    discount: yup.number().optional(),
    link: yup.string().url().nullable().optional().default(null),
    status: yup.string().oneOf(["active", "inactive"]).optional(),
    image: yup.mixed().optional(),
  });
  let status = [
    { label: "active", value: "active" },
    { label: "inactive", value: "inactive" },
  ];
  
  const {
    control,
    register,
  setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductEditDTO),
  });

  const getDetailsOfBanner = async (id: string) => {

    try {
      
    } catch (error) {
      toast.error("Error fetching banner details");
      console.log("Error fetching banner details", error);
    }

  };

  const onSubmit = (data: any) => {
    try {
        let date = DateTime.now().toISODate();
        console.log(date);
        console.log("Banner create data:",data);
    } catch (error) {
        console.log(error);
    }finally{
        // Todo
    }
  }

  useEffect(() => {
    console.log("Banner edit params", params);
  }, [params]);
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
              <span className=" text-red-500 text-sm">
                {errors.image?.message}
              </span>
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
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      value={status.find((c) => c.value == fieldState)}
                      options={status}
                      onChange={(selectedOption: any) => {
                        field.onChange(selectedOption.value);
                      }} // Update the form state
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
                <Controller
                  name="category"
                  control={control}
                  render={({ field, fieldState,formState }) => (
                    <Select
                      isMulti
                      {...field}
                      options={categoryOptions}
                     
                    />
                  )}
                />
              <span className=" text-red-400 text-sm">{errors.category?.message}</span>
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
            // isProcessing={createProduct.isPending}
            // disabled={createProduct.isPending}
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

export default ProductEdit;
