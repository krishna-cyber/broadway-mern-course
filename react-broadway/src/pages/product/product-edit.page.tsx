import { Button, Label, FileInput, Select } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingPage from "../loading/loading.page";

const ProductEdit = () => {
  const params = useParams();
  const [loading,setLoading]  = useState(false);
  const ProductEditDTO = yup.object({
    title: yup
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
    watch,
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
         Update Banner Details
        </h2>
        {loading ? 
        <LoadingPage/>: <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <Label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Banner Title
              </Label>

              <TextInputComponent
                name="title"
                control={control}
                placeholder="Banner Title"
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
              {...register("image")}
                id="image"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
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
            color={""}
            size={"xs"}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
              <GrSend className="mr-2 h-5 w-5" />
           Update product
          </Button>
        </form>}
       
      </div>
    </section>
  );
};

export default ProductEdit;
