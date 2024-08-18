import { useState, useEffect } from "react";
import { HiShoppingBag } from "react-icons/hi";
import cart from "../../assets/images/e-commerce cart.jpg";
import { useForm } from "react-hook-form";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import {  NavLink, useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import httpService from "../../services/http.service";
import { toast } from "react-toastify";
import { Button, Modal, HR } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { HiLogin, HiOutlineExclamationCircle } from "react-icons/hi";
import { MessageConstants } from "../../config/constants";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useSelector } from "react-redux";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {loggedInUser}= useSelector((state: any) => state.user);

  const RegisterDTO = yup
    .object({
      fullName: yup.string().required("Name is required"),
      phone: yup.string(),
      address: yup.string().required("Address is required"),
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password must contain at least 8 characters, including one letter and one number"
        )
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf(
          [yup.ref("password")],
          "Password and Confirm password must match"
        )
        .required("Confirm Password is required"),
      role: yup.string().default("customer"),
      profile: yup.mixed().required("Image is required"),
    })
    .required();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterDTO),
  });

  const onSubmit = async (data: any) => {
    // console.log(data)

    //submitting form data to the server
    try {
      setLoading(true);
      const response = await httpService.postRequest(
        "/auth/register",
        data,
        { file: true }
      );

      console.log("success submission of form data", response.data);
      toast.info(
        "Registration success ! Please check your email to verify your account"
      );
    } catch (error: any) {
      console.log("submit form exception:" + error.data.result);
      //error during the submission of form data
      // seperating the result from the error object based on validation error field

      if (error.status === 400) {
        //setting error for fields by server
        Object.keys(error.data.result).map((field: any) => {
          setError(field, { message: error.data.result[field] });
        });
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if(loggedInUser){
      toast.success("User has already logged in")
      navigate(`/${loggedInUser?.role}`)
    }
  }, []);
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={cart}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>

              <HiShoppingBag className=" w-12 h-12" />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Ecommerce
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Registration for the e-commerce website.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <TextInputComponent
                  control={control}
                  name="fullName"
                  errMsg={errors?.fullName?.message}
                  required={true}
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <TextInputComponent
                  control={control}
                  type={"email"}
                  name="email"
                  errMsg={errors?.email?.message}
                  required={true}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Phone{" "}
                </label>

                <TextInputComponent
                  control={control}
                  type={"text"}
                  name="phone"
                  errMsg={errors?.phone?.message}
                  required={true}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <TextInputComponent
                  control={control}
                  type={"password"}
                  name="password"
                  errMsg={errors?.password?.message}
                  required={true}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <TextInputComponent
                  control={control}
                  type={"password"}
                  name="confirmPassword"
                  errMsg={errors?.confirmPassword?.message}
                  required={true}
                />
              </div>

              {/* file upload */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={(e: any) => {
                    e.preventDefault();
                     const image = e.target.files["0"];
                    setValue("profile", image);
                  }}
                />
              </div>

              {/* address */}
              <div className="col-span-6 sm:col-span-3">
                <TextAreaComponent
                  control={control}
                  name="address"
                  errMsg={errors?.address?.message}
                />
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  type="submit"
                  isProcessing={loading}
                  processingSpinner={
                    <AiOutlineLoading className="h-6 w-6 animate-spin" />
                  }
                  disabled={loading}
                  className=" w-[40%]"
                >
                  Create an account
                </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <NavLink to={"/login"} className="text-gray-700 underline ">
                    {" "}
                    Log in
                  </NavLink>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export const UserActivate = () => {
  const params = useParams<{ token: string }>();
  const [msg, setMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  // activate user function
  const activateUser = async () => {
    try {
      const response = await httpService.getRequest(
        `/auth/activate/${params.token}`
      );
      setMsg(
        ` User has been activated successfully. You can now login to your account.`
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
      if (
        +error.status === 422 &&
        error.data.message === MessageConstants.INVALID_TOKEN
      ) {
        //ask user to resend activation token
        setMsg(MessageConstants.INVALID_TOKEN);
        // popup message to resend activation token
        setOpenModal(!openModal);
      }

      console.log(error);
    }
  };

  useEffect(() => {
    // activate user function call
    activateUser();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm lg:mt-24 text-center ">
          <h1 className="mb-4 text-2xl tracking-tight font-extrabold lg:text-7xl text-primary-600 dark:text-primary-500">
            {msg}
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            User has been activated successfully. You can now login to your
            account.
          </p>
          <NavLink to="/login">
            <Button
              className=" mx-auto  items-center"
              gradientDuoTone="greenToBlue"
            >
              Back to Login
              <HiLogin className="ml-2 h-5 w-5" />
            </Button>
          </NavLink>
        </div>
      </div>

      {/* Modal if token exired and model for resend activation Token */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {msg}
            </h3>
            <div className="flex justify-center gap-4">
              {/* <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button> */}
              <small className="text-gray-500 dark:text-gray-400">
                It seems your activation token has expired. Please click on the
                button below to resend the activation token.
              </small>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color={"failure"} onClick={() => setOpenModal(false)}>
            Resend Token
          </Button>
          <Button color="light" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

// Login page
export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const {loggedInUser} = useSelector((state: any) => state.user);
  // const { loggedInUser, setLoggedInUser }: any = useContext(AuthContext);
  const navigate = useNavigate();

  const LoginDTO = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  interface LoginProps {
    email: string;
    password: string;
  }

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginDTO),
  });

  const onSubmit = async (data: LoginProps) => {
    try {
      console.log(data);
      setLoading(true);
      const response: any = await httpService.postRequest(
        "/auth/login",
        data
      );
      // setLoggedInUser(response?.result?.userDetail);
      localStorage.setItem("_at", response?.result?.token);
      localStorage.setItem("_rt", response?.result?.refreshToken);
      toast.success("User logged in successfully");
      navigate(`/${response?.result?.userDetail?.role}`);
    } catch (error: any) {
      console.log(`error from signin page`, error);
      toast.error(error?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      toast.success("User has already logged in");
      navigate(`/${loggedInUser?.role}`);
    }
  }, [loggedInUser]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-1 py-4 mx-auto ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <TextInputComponent
                  control={control}
                  name="email"
                  errMsg={errors?.email?.message}
                  required={true}
                  placeholder="user@mail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <TextInputComponent
                  type="password"
                  control={control}
                  name="password"
                  errMsg={errors?.password?.message}
                  required={true}
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <NavLink
                  to={"forgot-password"}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </NavLink>
              </div>
              <Button
                disabled={loading}
                isProcessing={loading}
                processingSpinner={
                  <AiOutlineLoading className="h-6 w-6 animate-spin" />
                }
                size={"xm"}
                color={"null"}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                Don’t have an account yet?{" "}
                <NavLink
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </NavLink>
              </p>
              <HR.Text className="m-0" text="or" />
              <div className=" flex justify-between flex-nowrap">
                <Button
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-xs px-5 py-2text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 "
                  as={"button"}
                  size={"xs"}
                  color={"null"}
                >
                  <FaFacebook className="mr-2 h-5 w-5" />
                  Sign in with Facebook
                </Button>
                <Button
                  color={"null"}
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 "
                  as={"button"}
                  size={"xs"}
                >
                  <FaGoogle className="mr-2 h-5 w-5" />
                  Sign in with Google
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
