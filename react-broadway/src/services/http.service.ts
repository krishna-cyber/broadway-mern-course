import { AxiosResponse } from "axios";
import { instance } from "../config/axios.config";
import { SearchParams } from "../config/constants";

interface HeaderConfigProps {
  auth?: boolean;
  file?: boolean;
  params?: SearchParams;
}

abstract class HttpService {
  private headers = {};
  private params = {};

  #setHeaders = (config: HeaderConfigProps) => {
    // if config null set headers to default application/json

    if (!config) {
      this.headers = {
        ...this.headers,
        "Content-Type": "application/json",
      };
    }
    // if config is auth config set headers to bearer token
    if (config && config.auth) {
      // todo LOGIN TOKEN
      // get token from local storage set bearer token to header
      const accessToken = localStorage.getItem("_at");
      this.headers = {
        ...this.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    // if config is file config set headers to multipart/form-data
    if (config && config.file) {
      this.headers = {
        ...this.headers,
        "Content-Type": "multipart/form-data",
      };
    }

    // if config is auth and set params
    if (config && config.params) {
      this.params = { ...config.params };
    }
    console.log(`header set `, this.headers);
  };
  postRequest = async (url: string, data: any = {}, config: any = null) => {
    try {
      this.#setHeaders(config);
      const response = await instance.post(url, data, {
        headers: { ...this.headers },
      });

      console.log("success post request", response);
      return response;
    } catch (error) {
      throw error;
    }
  };
  getRequest = async (url: string, config: any = null) => {
    try {
      console.log("get request http service", url, config);
      this.#setHeaders(config);

      //TODO params for get request
      const response = await instance.get(url, {
        headers: { ...this.headers },
        params: { ...this.params },
      });

      console.log("success get request http service", response);
      return response;
    } catch (error: any) {
      console.log("get request error", error);
      throw error?.data;
    }
  };
  deleteRequest = async (url: string, config: any = null) => {
    try {
      console.log("delete request http service", url, config);
      this.#setHeaders(config);

      //TODO params for delete request
      const response : AxiosResponse = await instance.delete(url, {
        headers: { ...this.headers },
       
      });

      console.log("success delete request http service", response);
      return response;
    } catch (error: any) {
      console.log("delete request error", error);
      throw error?.data;
    }
  };
  patchRequest = async (url: string, data: any = {}, config: any = null) => {
    console.log("post request httprequest", url, data, config);

    try {
      this.#setHeaders(config);
      const response = await instance.patch(url, data, {
        headers: { ...this.headers },
        params: { ...this.params },
      });

      console.log("success post request", response);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default HttpService;
