import { Button, Label, FileInput, Select } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpService from "../../services/http.service";
import { useCreateCategory } from "../../services/mutations/mutations";

const CategoryCreate = () => {
  const createCategory = useCreateCategory();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const CategoryCreateDTO = yup.object({
    name: yup
      .string()
      .min(3, "Title must be at least 3 charactes.")
      .max(50)
      .required(),
    description: yup.string().min(10).max(500).required(),
    link: yup.string().url().nullable().optional().default(null),
    status: yup.string().oneOf(["active", "inactive"]).required(),
    image: yup.mixed().required(),
  });
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CategoryCreateDTO),
  });
console.log(`errors`, errors);
  const onSubmit = async (data:any,error) => {
    console.log(`Data for create category`, data);
    setLoading(true);
    createCategory.mutate(data,{
      onSuccess: (data) => {
        toast.success(data?.message);
        navigate("/admin/category-lists");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
        setLoading(false);
      },
      
    });
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create new Category
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <Label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category Title
              </Label>

              <TextInputComponent
                name="name"
                control={control}
                placeholder="Category Title"
                errMsg={errors.name?.message}
              />
            </div>
          

            <div>
              <Label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Active Status
              </Label>
              <div className="max-w-md">
                <Select {...register("status")} id="status" required>
                  <option>active</option>
                  <option>inactive</option>
                </Select>
              </div>
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
              <span className="text-red-500 text-xs">
                {errors.image?.message}
              </span>
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
            isProcessing={loading}
            disabled={loading}
            type="submit"
            color={""}
            size={"xs"}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            <GrSend className="mr-2 h-5 w-5" />
            Create category
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CategoryCreate;
