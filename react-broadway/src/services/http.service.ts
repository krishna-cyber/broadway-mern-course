import { axiosInstance } from "../config/axios.config";
import { SearchParams } from "../config/constants";

interface HeaderConfigProps {
  auth?: boolean;
  file?: boolean;
  params?: SearchParams;
}

class HttpService {
  private headers = {};
  private params = {};

  #setHeaders = (config: HeaderConfigProps) => {
    // if config null set headers to default application/json
    if (!config) {
      this.headers = {
        ...this.headers,
        'Content-Type': 'application/json',
        // "Content-Type": "application/json",
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
        'Content-Type': 'multipart/form-data',
      };
    }

    // if config is auth and set params
    if (config && config.params) {
      this.params = { ...config.params };
    }
  };
  postRequest = async (url: string, data: any = {}, config: any = null) => {
    try {
      this.#setHeaders(config);
      const response = await axiosInstance.post(url, data, {
        headers: { ...this.headers },
      });

      return response;
    } catch (error) {
      throw error;
    }
  };
  getRequest = async (url: string, config: any = null) => {
    try {
      this.#setHeaders(config);

      //TODO params for get request
      const response = await axiosInstance.get(url, {
        headers: { ...this.headers },
        params: { ...this.params },
      });

      return response;
    } catch (error: any) {
      throw error?.data;
    }
  };
  deleteRequest = async (url: string, config: any = null) => {
    try {
      this.#setHeaders(config);

      //TODO params for delete request
      const response = await axiosInstance.delete(url, {
        headers: { ...this.headers },
      });

      return response;
    } catch (error: any) {
      throw error?.data;
    }
  };
  putRequest = async (url: string, data: any = {}, config: any = null) => {
    try {
      this.#setHeaders(config);
      const response = await axiosInstance.put(url, data, {
        headers: { ...this.headers },
      });

      return response;
    } catch (error) {
      throw error;
    }
  };
  patchRequest = async (url: string, data: any = {}, config: any = null) => {
    try {
      this.#setHeaders(config);

      console.log("data", data);
      console.log("headers", this.headers);
      const response = await axiosInstance.patch(url, data, {
        headers: {...this.headers},
      });

      return response;
    } catch (error) {
      throw error;
    }
  };
}

const httpService = new HttpService();
export default httpService;
