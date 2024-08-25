import { useEffect, useState } from "react";
import { SliderComponent } from "../common/slider/slider.component";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";
import { useFetchLandingPageBanners } from "../../services/queries/queries";

export const BannerComponent = () => {


  const {data,isLoading,isError} = useFetchLandingPageBanners();
  return (
    <div className=" mt-[2px]">

      {isLoading && <div>Loading...</div>}

      {data?.result && (

      <SliderComponent data={data?.result} />
      )}
    </div>
  );
};
