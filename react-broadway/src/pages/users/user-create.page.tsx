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

const UserCreate = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const UserCreateDTO = yup.object({
    fullName: yup
      .string()
      .min(3, "Title must be at least 3 charactes.")
      .max(50)
      .required(),
    email:yup.string().email(),
    phone: yup.string().min(10).max(15).required(),
    image: yup.mixed().required(),
    password: yup.string().min(6).max(20).required(),
    role: yup.string().oneOf(["customer", "seller"]).required(),
  });
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserCreateDTO),
  });


  console.log(errors)
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      console.log("Banner create data:", data);
      const response: any = await httpService.postRequest("/banner", data, {
        auth: true,
        file: true,
      });
      toast.success(response?.message);
    } catch (error) {
      toast.error(`Failed to create user`)
      console.log(error);
    } finally {
      setLoading(false);
      navigate("/admin/user-lists");
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 max-w-[80%] lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create new User
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          
            <div>
              <Label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </Label>
              <div className="max-w-md">
              <TextInputComponent
                name="fullName"
                control={control}
                placeholder="User fullName"
                errMsg={errors.fullName?.message}
              />
              </div>
            </div>
            <div>
              <div>
              <Label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Email
              </Label>
              </div>
              <TextInputComponent
                name="email"
                placeholder="Email"
                control={control}
                errMsg={errors.email?.message}
              />
            </div>

            <div>
              <Label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </Label>
              <div className="max-w-md">
              <TextInputComponent
                name="password"
                placeholder="********"
                control={control}
                errMsg={errors.password?.message}
              />
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
              {errors.image?.message&& <span className=" text-red-500 text-md italic">Profile picture must be required</span>}
            </div>
            <div>
              <Label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </Label>
              <div className="max-w-md">
              <Select {...register("role")} id="role" required>
                  <option>seller</option>
                  <option>customer</option>
                </Select>
              </div>
            </div>
            <div>
              <Label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </Label>
              <div className="max-w-md">
              <TextInputComponent
                name="phone"
                control={control}
                placeholder="+977 98xxxxxxx"
                errMsg={errors.phone?.message}
              />
              </div>
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
            Create user
          </Button>
        </form>
      </div>
    </section>
  );
};

export default UserCreate;
