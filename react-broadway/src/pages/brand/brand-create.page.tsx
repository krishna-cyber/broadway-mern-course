import { Button, Label, FileInput, Select } from "flowbite-react";
import {
  TextInputComponent,
} from "../../components/common/form/form.components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { useCreateBrand } from "../../services/mutations/mutations";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BrandCreate = () => {
  const {loggedInUser} = useSelector((state: any) => state.user);
  const navigate= useNavigate();
    
  const brandCreate = useCreateBrand();
  const brandCreateDTO = yup.object({
    title: yup
      .string()
      .min(3, "Title must be at least 3 charactes.")
      .max(50)
      .required(),
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
    resolver: yupResolver(brandCreateDTO),
  });

  const onSubmit = async (data: any) => {
    brandCreate.mutate(data,{
      onSuccess:(data)=>{
        navigate(`/${loggedInUser.role}/brand-lists`)
      }
    })
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create new Brand
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <Label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Brand name
              </Label>

              <TextInputComponent
                name="title"
                control={control}
                placeholder="Brand Name"
                errMsg={errors.title?.message}
              />
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Link
              </Label>

              <TextInputComponent
                name="link"
                control={control}
                placeholder="https://"
                errMsg={errors.link?.message}
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
            </div>

          
          </div>
          <Button
            isProcessing={brandCreate.isPending}
            disabled={brandCreate.isPending}
            type="submit"
            color={""}
            size={"xs"}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            <GrSend className="mr-2 h-5 w-5" />
            Create Brand
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BrandCreate;
