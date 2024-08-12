import CategoryMenu from "../../components/common/category-menu.component.tsx";
import { BannerComponent } from "../../components/banner/banne-slider.component.tsx.tsx";
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
