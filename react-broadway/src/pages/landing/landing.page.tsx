import { Button } from "flowbite-react";
import { BannerComponent } from "../../components/banner/banne-slider.component.tsx.tsx";
import {
  ImageWithTitleCard,
  SingleCardItem,
} from "../../components/common/card/single-card.component.tsx";
import { Link } from "react-router-dom";
import CategoryMenu from "../../components/common/category-menu.component.tsx";
import ProductCardComponent from "../../components/products/product-card.component.tsx";
import ProductViewLandingPage from "../../components/products/product-Listing.component.tsx";

const LandingPage = () => {
  return (
    <>
    {/* Header and Footer Component comes from layout page of landing page */}
      {/* <Header /> */}
      <BannerComponent />
      <CategoryMenu />
      <ProductViewLandingPage/>
   
    </>
  );
};

export default LandingPage;
