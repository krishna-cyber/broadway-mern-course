import { useEffect, useState } from "react"
import { SliderComponent } from "../common/slider/slider.component";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";

export const BannerComponent = () => {
    const[bannerData,setBannerData] = useState([] as Array<SingleSlider>);

    const getAllBanner = async () => {
        //load API and get Banner list

        const response:Array<SingleSlider> = [{
            _id:"",
            title:"Banner Image",
            image:"https://icms-image.slatic.net/images/ims-web/d01caa71-9c68-4c12-a35e-f6c10c53e73d.jpg",
            link:null
        },
        {
            _id:"",
            title:"Banner Image",
            image:"https://icms-image.slatic.net/images/ims-web/4c4fb9e7-8756-4e03-a3cf-b638f5bb62cc.jpg",
            link:null
        },
        {
            _id:"",
            title:"Banner Image",
            image:"https://icms-image.slatic.net/images/ims-web/0709b0a7-219b-4371-b3e3-5136b11e6a6f.jpg",
            link:null
        },
        {
            _id:"",
            title:"Banner Image",
            image:"https://icms-image.slatic.net/images/ims-web/7fd53774-5526-44dd-95c7-317f443e4936.png",
            link:null
        },
        {
            _id:"",
            title:"Banner Image",
            image:"https://icms-image.slatic.net/images/ims-web/d2b66620-22a6-4fc6-8a81-8bf6866c0825.jpg",
            link:null
        }
    ]
        setBannerData(response);
    }; 
useEffect(()=>{
    getAllBanner();
},[])
  return (
   <div className=" mt-[2px]" >
    <SliderComponent data={bannerData}/>
   </div>

  )
}

