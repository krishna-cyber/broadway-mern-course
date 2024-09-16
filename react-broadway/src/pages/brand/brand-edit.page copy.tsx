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
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingPage from "../loading/loading.page";
import { useSelector } from "react-redux";
import { useFetchBrandById } from "../../services/queries/queries";
import { useUpdateBrand } from "../../services/mutations/mutations";
import { updateBrand } from "../../services/api/api";

const BrandUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    data: brandData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useFetchBrandById(params.id);
  const updateBrand = useUpdateBrand();
  const { loggedInUser } = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(false);
  const brandEditDTO = yup.object({
    title: yup
      .string()
      .min(3, "Title must be at least 3 charactes.")
      .max(50)
      .optional(),
    description: yup.string().min(10).max(500).optional(),
    link: yup.string().url().nullable().optional().default(null),
    status: yup.string().oneOf(["active", "inactive"]).optional(),
    image: yup.mixed().optional(),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(brandEditDTO),
  });
console.log(errors)
  const getDetailsOfbrand = async (id: string) => {
    try {
    } catch (error) {
      toast.error("Error fetching brand details");
      console.log("Error fetching brand details", error);
    }
  };

  const onSubmit = (data: any) => {
    console.log("data", data);
    data.id = params.id;
    updateBrand.mutate(data,{
      onSuccess:(data, variables, context)=> {
        toast.success(`${data?.message}`);
        navigate(`/${loggedInUser?.role}/brand-lists`);
      },
    })
  };

  useEffect(() => {
    if (isSuccess) {
      setValue("title", brandData.result.title);
      setValue("link", brandData.result.link);
      setValue("status", brandData.result.status);
    }
  }, [isSuccess]);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update Brand Details
        </h2>
        {loading ? (
          <LoadingPage />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <Label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand Title
                </Label>

                <TextInputComponent
                  name="title"
                  control={control}
                  placeholder="brand Title"
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
                  <Select {...register("status")} id="status" >
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
                {/* show the selected image */}
               
              </div>
              <img
                src={brandData?.result.image}
                alt="banner"
                className="w-400 shadow-xl h-40"
              />
            </div>
            <Button
              type="submit"
              isProcessing={updateBrand.isPending}
              disabled={updateBrand.isPending}
              color={""}
              size={"xs"}
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              <GrSend className="mr-2 h-5 w-5" />
              Update brand
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BrandUpdate;
