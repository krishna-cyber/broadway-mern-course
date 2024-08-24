import { useQuery } from "@tanstack/react-query";
import { getBannersForTable, getBrandsForTable, getProductsForTable,  getUsersForTable } from "../api/api";

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


export function useFetchUsers(){
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsersForTable
  })
}

export function useFetchBrandsForTable(){
  return useQuery({
      queryKey: ["productListsForTable"],
      queryFn: getBrandsForTable,
    });
}