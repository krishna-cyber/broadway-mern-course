import { axiosInstance } from "../../config/axios.config"
import httpService from "../http.service"
import { Product } from "../../types/types"



export const getProductsForTable = async ()=>{
   return await  httpService.getRequest('/product')
      
}

export const countTotalProducts = async ()=>{
   return await  httpService.getRequest('/product/count')
      
}


export const getproductsForLandingPage =async ()=>{
   return await  httpService.getRequest('/product/list-home')
      
}

export const createProduct = async(data:any)=>{
   console.log(data)
   return await httpService.postRequest('/product/create-product')
}