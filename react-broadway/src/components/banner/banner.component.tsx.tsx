import { useEffect, useState } from "react"
import {SliderComponent} from "../common/slider/slider.component"

export const BannerComponent = () => {
    const[bannerData,setBannerData] = useState([]);

    const getAllBanner = async () => {
        //load API and get Banner list

        const response:any = [{
            _id:"",
            title:"Banner Image",
            image:"https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148690176.jpg?w=1060&t=st=1720443069~exp=1720443669~hmac=6b2d4a87059b29777785d9a66dd503e426acf6c698e7002377d32840019ce27c",
        }]
        setBannerData(response);
    }; 

    useEffect(()=>{

    })
  return (
   <div >
    <SliderComponent data={bannerData}/>
   </div>

  )
}

