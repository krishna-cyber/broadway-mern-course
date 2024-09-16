import {
  keepPreviousData,
  useInfiniteQuery,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import {
  getAllCategories,
  getBannerById,
  getBannersForTable,
  getBrandById,
  getBrandsForTable,
  getCategoryById,
  getCategoryForTable,
  getCategoryLists,
  getLandingPageBanner,
  getOrdersForTable,
  getProductsByName,
  getproductsForLandingPage,
  getProductsForTable,
  getUsersForTable,
} from "../api/api";

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["productListsForHome"],
    queryFn: ({pageParam=1}) => getproductsForLandingPage(pageParam),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages, lastPageParam, allPagesParam) => {
      return lastPage.hasMore ? lastPageParam+1 : undefined;
    },
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPagesParam
    ) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
}
export function useFetchProductsForTable(page: number, limit: number) {
  return useQuery({
    queryKey: ["productListsForTable", { page }],
    queryFn: () => getProductsForTable(page, limit),
    placeholderData: keepPreviousData,
  });
}
export function useFetchProductByName(name: string) {
  return useQuery({
    queryKey: ["product", { name }],
    queryFn: () => getProductsByName(name),
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
export function useFetchAllCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
}
export function useFetchOrdersList(page: number, limit: number) {
  return useQuery({
    queryKey: ["ordersLists"],
    queryFn: () => getOrdersForTable(page, limit),
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
export function useFetchBannerById(id: string) {
  return useQuery({
    queryKey: ["banner", { id }],
    queryFn: () => getBannerById(id),
    
  });
}
export function useFetchCategoryById(id: string) {
  return useQuery({
    queryKey: ["category", { id }],
    queryFn: () => getCategoryById(id),
    
  });
}


export function useFetchBrandsForTable(page: number, limit: number) {
  return useQuery({
    queryKey: ["brandListForTable", { page }],
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

export function useFetchBrandById (id: string) {
  return useQuery({
    queryKey: ["brand", { id }],
    queryFn: () => getBrandById(id),
    
  });
}