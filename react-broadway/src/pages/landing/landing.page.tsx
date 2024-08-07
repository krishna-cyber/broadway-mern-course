import { Button } from "flowbite-react";
import { BannerComponent } from "../../components/banner/banne-slider.component.tsx.tsx";
import {
  ImageWithTitleCard,
  SingleCardItem,
} from "../../components/common/card/single-card.component.tsx";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <BannerComponent />

      <div className="flex justify-between mx-10 sm:mx-20 mt-3 border-b border-solid border-teal-500/50 pb-2">
        <h3>Category List</h3>
        <Link to="/categories">
          <Button gradientDuoTone="cyanToBlue">View all &rarr;</Button>
        </Link>
      </div>
      <div className=" mx-10 mt-2 grid gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 flex-wrap">
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />{" "}
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />{" "}
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <ImageWithTitleCard
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
      </div>
      <div className=" mx-10 mt-2 grid gap-3 sm:grid-cols-3 md:grid-cols-4  flex-wrap">
        <SingleCardItem
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <SingleCardItem
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <SingleCardItem
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <SingleCardItem
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <SingleCardItem
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
        <SingleCardItem
          data={{
            _id: "1",
            title: "Category 1",
            slug: "/category/gaming-chairs",
            image: "https://via.placeholder.com/500",
          }}
        />
      </div>
    </>
  );
};

export default LandingPage;
