import { Button, Label, FileInput, Select } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../loading/loading.page";
import { useFetchCategoryById } from "../../services/queries/queries";
import { useUpdateCategory } from "../../services/mutations/mutations";
import { useSelector } from "react-redux";

const CategoryEdit = () => {
  const {loggedInUser} = useSelector((state: any) => state.user);
  const {id} = useParams();
  const navigate = useNavigate();
  const {data:categoryData,isLoading,isSuccess}=useFetchCategoryById(id);
  const updateCategory=useUpdateCategory();
  const CategoryEditDTO = yup.object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 charactes.")
      .max(50)
      .optional(),
    link: yup.string().url().nullable().optional().default(null),
    image : yup.mixed().optional(),
    description : yup.string().optional(),
    status: yup.string().oneOf(["active", "inactive"]).optional(),
  });
  
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CategoryEditDTO),
  });

  const onSubmit = (data: any) => {
    data.id = id;
  updateCategory.mutate(data,{
    onSuccess:()=>{
      navigate(`/${loggedInUser?.role}/category-lists`);
    }
  })
  }

  useEffect(() => {
    if (isSuccess) {
      setValue("name", categoryData.result.name);
      setValue("status", categoryData.result.status);
      setValue("description", categoryData.result.description);
    }
  }, [isSuccess]);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
         Update category Details
        </h2>
        {isLoading ? 
        <LoadingPage/>: <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <Label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                category Title
              </Label>

              <TextInputComponent
                name="name"
                control={control}
                placeholder="category Title"
                errMsg={errors.name?.message}
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
             
                   <img
               src={`http://localhost:3000/${categoryData.result.image}`} 
                alt="banner"
                className="w-400 shadow-xl h-40"
              />
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
                control={control}
                errMsg={errors.description?.message}
              />
            </div>
          </div>
          <Button
            type="submit"
            isProcessing={updateCategory.isPending}
            disabled={updateCategory.isPending}
            color={""}
            size={"xs"}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
              <GrSend className="mr-2 h-5 w-5" />
           Update category
          </Button>
        </form>}
       
      </div>
    </section>
  );
};

export default CategoryEdit;
