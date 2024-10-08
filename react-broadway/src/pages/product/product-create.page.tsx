import { Button, Label, FileInput } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useFetchAllCategories } from "../../services/queries/queries";
import { useCreateProduct } from "../../services/mutations/mutations";
import { useSelector } from "react-redux";
const ProductCreateDTO = yup.object({
  title: yup
    .string()
    .min(3, "Title must be at least 3 charactes.")
    .max(50)
    .required(),
  description: yup.string().min(10).max(500).required(),
  // status: yup.string().oneOf(["active", "inactive"]).required(),
  status: yup.mixed().required(),
  category: yup.array().min(1).required(),
  image: yup.mixed().required(),
  price: yup.number().required("Price is required"),
  stock: yup.number().required(),
  discount: yup.number().required(),
});

const ProductCreate = () => {
  const {loggedInUser} = useSelector((state: any) => state.user);
  const categories = useFetchAllCategories();
  const createProduct = useCreateProduct();
  const navigate = useNavigate();
  
  const categoryOptions = (categories.data?.result) ? (categories.data?.result.map((c)=>{
    return {label:c.name,value:c.id}
  })) : [];


  let status = [
    { label: "active", value: "active" },
    { label: "inactive", value: "inactive" },
  ];
 
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductCreateDTO),
  });
  const onSubmit = async (data: any) => {
    const categories = data.category.map((option:any)=>option.value)
    data.category = categories;
    createProduct.mutate(data,{
      onSuccess: ()=>{
        navigate(`/${loggedInUser.role}/product-lists`)
      }
    })
   navigate(`/${loggedInUser.role}/product-lists`);
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
            isProcessing={createProduct.isPending}
            disabled={createProduct.isPending}
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
