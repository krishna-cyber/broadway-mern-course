import { instance } from "../config/axios.config";


interface HeaderConfigProps {
    auth?:boolean;
    file?:boolean;

}

abstract class HttpService {
    private headers = {};

    #setHeaders=(config:HeaderConfigProps)=>{

        // if config null set headers to default application/json
        if(!config){
            this.headers={
                ...this.headers,
                'Content-Type':'application/json'
            }
            return;
        }

        if (config&&config.auth) {
            // todo LOGIN TOKEN
        }

        if(config && config.file){
            this.headers={
                ...this.headers,
                'Content-Type':'multipart/form-data'
            }
        }
    }
     postRequest = async (url:string,data:any = {},config:any=null)=>{
        console.log("post request httprequest",url,data,config);
        
        try {
            this.#setHeaders(config);
            const response = await instance.post(url,data,{
                headers:{...this.headers}
            });

            console.log("success post request",response);
            return response;
        } catch (error) {
            throw error;
        }
    }
    getRequest = async (url:string,config:any=null)=>{
        try {

            console.log("get request http service",url,config);
            this.#setHeaders(config);
                
            //TODO params for get request
            const response = await instance.get(url,{
                headers:{...this.headers}
            });

            console.log("success get request http service",response);
            return response;
        } catch (error) {
            console.log("get request error",error);
            throw error;
        }
    };
}


export default HttpService;