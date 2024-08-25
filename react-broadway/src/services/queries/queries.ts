import { useQuery } from "@tanstack/react-query";
import { getBannersForTable, getBrandsForTable, getCategoryForTable, getLandingPageBanner, getProductsForTable,  getUsersForTable } from "../api/api";

export function useFetchProductsForTable(){
    return useQuery({
        queryKey: ["productListsForTable"],
        queryFn: getProductsForTable,
      });
}
export function useFetchLandingPageBanners(){
  return useQuery({
      queryKey: ["landingPageBanners"],
      queryFn: getLandingPageBanner,
    });
}


export function useFetchProductsForLandingPage(){
    return useQuery({
        queryKey: ["productListsForHome"],
        queryFn: getProductsForTable,
      });
}

export function useFetchBannersForTable(){
  return useQuery({
    queryKey: ['bannerListsForTable'],
    queryFn: getBannersForTable
  })
}


export function useFetchUsers(){
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsersForTable
  })
}

export function useFetchBrandsForTable(){
  return useQuery({
      queryKey: ["brandListForTable"],
      queryFn: getBrandsForTable,
    });
}

export function useFetchCategoryForTable(){
  return useQuery({
    queryKey: ['categoryListsForTable'],
    queryFn: getCategoryForTable
  })
}
