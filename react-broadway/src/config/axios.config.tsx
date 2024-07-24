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
   console.log("success:" +response);
    return response
},(error:AxiosError) => {
    console.log("Error axios call:"+error)
    throw error
})


export  {instance};