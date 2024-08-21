import { axiosInstance } from "../../config/axios.config";
import httpService from "../http.service";
import { Product } from "../../types/types";

export const getProductsForTable = async () => {
  return await httpService.getRequest("/product");
};

export const countTotalProducts = async () => {
  return await httpService.getRequest("/product/count");
};

export const getproductsForLandingPage = async () => {
  return await httpService.getRequest("/product/list-home");
};

export const createProduct = async (data: any) => {
  console.log(data);
  return await httpService.postRequest("/product/create-product", {
    auth: true,
    file: true,
  });
};

export const getBannersForTable = async () => {
  return await httpService.getRequest("/banner", { auth: true });
};

export const getUsersForTable = async () => {
  return await httpService.getRequest("/users", { auth: true });
};


export const createUser = async (data: any) => {
   return await httpService.postRequest("/users/create-user", {auth:true,file:true});
};