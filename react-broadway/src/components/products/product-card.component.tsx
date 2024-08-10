import { Badge, Button, Rating, Tooltip } from "flowbite-react";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaCartPlus, FaDollarSign, FaHeartbeat, FaMoneyCheck, FaShoppingBasket } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";

const ProductCardComponent = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            alt=""
          />
          <img
            className="mx-auto hidden h-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
            alt=""
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Badge color="info"> Up to 35% off </Badge>
          <div className="flex items-center justify-end gap-1">
            <Tooltip content="Quick look" placement="top">
              <Button color={""} size={"xs"}>
                <AiOutlineEye className="h-5 w-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Add to favourite" placement="top">
              <Button color={""} size={"xs"}>
                <HiOutlineHeart className="h-5 w-5" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
        </a>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className=" ml-2 text-sm font-medium text-gray-900 dark:text-white">
            5.0 <span className="text-gray-500 dark:text-gray-400">(455)</span>
          </p>
        </Rating>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
         
              <GrDeliver className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Fast Delivery
            </p>
          </li>

          <li className="flex items-center gap-2">
          
            <FaDollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Best Price
            </p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            $1,699
          </p>


            <Button color={"blue"} size={"sm"}>
              <FaCartPlus className="h-5 w-5 mr-3" />
              Add to cart
            </Button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
