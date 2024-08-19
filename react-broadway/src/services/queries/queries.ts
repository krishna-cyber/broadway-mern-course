import { useQuery } from "@tanstack/react-query";
import { getBannersForTable, getProductsForTable } from "../api/api";

export function useFetchProductsForTable(){
    return useQuery({
        queryKey: ["productListsForTable"],
        queryFn: getProductsForTable,
      });
}


export function useFetchProductsForLandingPage(){
    return useQuery({
        queryKey: ["productListsForTable"],
        queryFn: getProductsForTable,
      });
}

export function useFetchBannersForTable(){
  return useQuery({
    queryKey: ['banners'],
    queryFn: getBannersForTable
  })
}

