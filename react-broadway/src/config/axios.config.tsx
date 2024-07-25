import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
   timeoutErrorMessage: 'Request Timeout',
   maxRate: 5,
   headers:{
        'Content-Type': 'application/json'
   }

  });



//   interceptors

instance.interceptors.response.use((response:AxiosResponse) => {
   console.log("success:intercept" +response);
    return response.data
},(error:AxiosError) => {
    if(error.code === "ERR_BAD_REQUEST"){
        console.log("Bad Request",error);
        throw error.response
    }else{
        //Manipulation of error
    }
})


export  {instance};