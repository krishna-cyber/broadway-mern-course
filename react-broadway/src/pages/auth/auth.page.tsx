import { HiShoppingBag } from "react-icons/hi";
import cart from "../../assets/images/e-commerce cart.jpg";
import { useForm } from "react-hook-form";
import { TextAreaComponent, TextInputComponent } from "../../components/common/form/form.components";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import authServiceInstance from "./auth.service";



export const RegisterPage = () => {

const RegisterDTO = yup.object({
   fullName: yup.string().required('Name is required'),
    phone:yup.string(),
    address: yup.string().required('Address is required'),
    email: yup.string().email().required('Email is required'),
   password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least 8 characters, including one letter and one number').required('Password is required'),
   confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password and Confirm password must match').required('Confirm Password is required'), 
  role:yup.string().default('customer'),
  profile : yup.mixed().required('Image is required'),
}).required()

  

  const onSubmit =async  (data:any)=>{
    // console.log(data)
     
    //submitting form data to the server
    try {
      const response = await authServiceInstance.postRequest('/auth/register',data,{file:true})

      console.log("success submission of form data",response.data)
    } catch (error) {
      console.log(error)
    }

  }
  //ignore typescript
     
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterDTO),
  });

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

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
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
                  onChange={(e:any)=>{
                    e.preventDefault();
                    const image = e.target.files['0'];
                    setValue('profile',image)
                  }}
                />
              </div>

              {/* address */}
              <div className="col-span-6 sm:col-span-3">
               
                <TextAreaComponent control={control} name="address" errMsg={errors?.address?.message} />
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
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

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



// Login page
export const LoginPage = () => {
  return <div>LoginPage</div>;
};
