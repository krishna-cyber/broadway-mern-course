import { axiosInstance } from "../config/axios.config"
import { Product } from "../types/types"

export const getProducts = async ()=>{
   return await  axiosInstance.get('/product/list-home')
      
}

export const countTotalProducts = async ()=>{
   return await  axiosInstance.get('/product/count')
      
}