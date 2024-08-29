import CategoryMenu from "../../components/common/category-menu.component.tsx";
import { BannerComponent } from "../../components/banner/banne-slider.component.tsx.tsx";
import ProductViewLandingPage from "../../components/products/product-Listing.component.tsx";

const LandingPage = () => {
  return (
    <>
   
      <BannerComponent />
      <CategoryMenu />
      <ProductViewLandingPage/>
   
    </>
  );
};

export default LandingPage;
