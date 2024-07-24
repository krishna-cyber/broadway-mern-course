import { instance } from "../config/axios.config";


interface HeaderConfigProps {
    auth?:boolean;
    file?:boolean;

}

abstract class HttpService {
    private headers = {};

    #setHeaders=(config:HeaderConfigProps)=>{
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
        
        
        try {
            this.#setHeaders(config);
            const response = await instance.post(url,data,{
                headers:{...this.headers}
            });

            console.log("success post request",response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}


export default HttpService;