import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axiosInstance : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
   timeoutErrorMessage: 'Request Timeout',
   maxRate: 5,


  });



//   interceptors

axiosInstance.interceptors.response.use((response:AxiosResponse) => {
    return response.data
},(error:AxiosError) => {
    if(error.code === "ERR_BAD_REQUEST"){
        throw error.response
    }else{
        //Manipulation of error
    }
})


export  {axiosInstance};