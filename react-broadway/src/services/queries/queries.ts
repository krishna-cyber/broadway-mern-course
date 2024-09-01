import { keepPreviousData, useQueries, useQuery } from "@tanstack/react-query";
import {
  getBannersForTable,
  getBrandsForTable,
  getCategoryForTable,
  getCategoryLists,
  getLandingPageBanner,
  getOrdersForTable,
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
export function useFetchCategoryList() {
  return useQuery({
    queryKey: ["landingPageCategory"],
    queryFn: getCategoryLists,
  });
}
export function useFetchOrdersList(page: number, limit: number) {
  return useQuery({
    queryKey: ["ordersLists"],
    queryFn:()=> getOrdersForTable(page, limit),
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

export function useFetchUsers(page: number, limit: number) {
  return useQuery({
    queryKey: ["users", { page }],
    queryFn: () => getUsersForTable(page, limit),
    placeholderData: keepPreviousData,
  });
}

export function useFetchCategoryForTable(page: number, limit: number) {
  return useQuery({
    queryKey: ["categoryListsForTable", { page }],
    queryFn: () => getCategoryForTable(page, limit),
    placeholderData: keepPreviousData,
  });
}
