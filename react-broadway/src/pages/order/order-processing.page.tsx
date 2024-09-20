import { Button, Label, FileInput, Select } from "flowbite-react";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/common/form/form.components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GrSend } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingPage from "../loading/loading.page";

const OrderProcessing = () => {
  const params = useParams();
  const [loading,setLoading]  = useState(true);
  const CategoryEditDTO = yup.object({
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
    resolver: yupResolver(CategoryEditDTO),
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
   <p>Order processing by admin</p>
  );
};

export default OrderProcessing;
