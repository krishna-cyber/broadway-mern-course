import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getBannersForTable,
  getBrandsForTable,
  getCategoryForTable,
  getLandingPageBanner,
  getProductsForTable,
  getUsersForTable,
} from "../api/api";

export function useFetchProductsForTable(page: number, limit: number) {
  return useQuery({
    queryKey: ["productListsForTable", { page }],
    queryFn: () => getProductsForTable(page, limit),
    placeholderData: keepPreviousData,
  });
}
export function useFetchLandingPageBanners() {
  return useQuery({
    queryKey: ["landingPageBanners"],
    queryFn: getLandingPageBanner,
  });
}

export function useFetchProductsForLandingPage() {
  return useQuery({
    queryKey: ["productListsForHome"],
    queryFn: getLandingPageBanner,
  });
}

export function useFetchBannersForTable(page: number, limit: number) {
  return useQuery({
    queryKey: ["bannerListsForTable", { page }],
    queryFn: () => getBannersForTable(page, limit),
    placeholderData: keepPreviousData,
  });
}

export function useFetchBrandsForTable(page: number, limit: number) {
  return useQuery({
    queryKey: ["bannerListsForTable", { page }],
    queryFn: () => getBrandsForTable(page, limit),
    placeholderData: keepPreviousData,
  });
}

export function useFetchUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsersForTable,
  });
}


export function useFetchCategoryForTable(page:number,limit:number) {
  return useQuery({
    queryKey: ["categoryListsForTable",{page}],
    queryFn:()=> getCategoryForTable(page,limit),
    placeholderData: keepPreviousData,
  });
}
