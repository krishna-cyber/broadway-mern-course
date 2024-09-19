import httpService from "../http.service";

export const getLandingPageBanner = async () => {
  return await httpService.getRequest("/banner/list-home");
};

export const getProductsForTable = async (page: number, limit: number) => {
  return await httpService.getRequest(`/product?page=${page}&limit=${limit}`);
};

export const countTotalProducts = async () => {
  return await httpService.getRequest("/product/count");
};
export const getProductsByName = async (id: string) => {
  return await httpService.getRequest(`/product/${id}`);
};

export const getproductsForLandingPage = async (pageParam: number) => {
  console.log(`pageparm infine query`, { pageParam });
  return await httpService.getRequest(
    `/product/list-home?page=${pageParam}&limit=8`
  );
};

export const getCategoryLists = async () => {
  return await httpService.getRequest("/category/list-home");
};
export const getAllCategories = async () => {
  return await httpService.getRequest("/category/lists", { auth: true });
};
export const createProduct = async (data: any) => {
  return await httpService.postRequest("/product", data, {
    auth: true,
    file: true,
  });
};

export const placeOrder = async (data: any) => {
  return await httpService.postRequest("/order", data,{auth:true});
};
export const createBrand = async (data: any) => {
  return await httpService.postRequest("/brand", data, {
    auth: true,
    file: true,
  });
};

export const createCategory = async (data: any) => {
  return await httpService.postRequest("/category", data, {
    auth: true,
    file: true,
  });
};
export const getBannersForTable = async (page: number, limit: number) => {
  return await httpService.getRequest(`/banner?page=${page}&limit=${limit}`, {
    auth: true,
  });
};
export const getBannerById = async (id: string) => {
  return await httpService.getRequest(`/banner/${id}`, { auth: true });
};
export const getCategoryById = async (id: string) => {
  return await httpService.getRequest(`/category/${id}`, { auth: true });
}


export const getUsersForTable = async (page: number = 1, limit: number = 5) => {
  return await httpService.getRequest(`/users?page=${page}&limit=${limit}`, {
    auth: true,
  });
};

export const getBrandsForTable = async (page: number, limit: number) => {
  return await httpService.getRequest(`/brand?page=${page}&limit=${limit}`, {
    auth: true,
  });
};
export const getCategoryForTable = async (
  page: number = 1,
  limit: number = 5
) => {
  return await httpService.getRequest(`/category?page=${page}&limit=${limit}`, {
    auth: true,
  });
};
export const getOrdersForTable = async (
  page: number = 1,
  limit: number = 5
) => {
  return await httpService.getRequest(`/order?page=${page}&limit=${limit}`, {
    auth: true,
  });
};

export const createUser = async (data: any) => {
  return await httpService.postRequest("/users", data, {
    auth: true,
    file: true,
  });
};

export const createBanner = async (data: any) => {
  return await httpService.postRequest("/banner", data, {
    auth: true,
    file: true,
  });
};

export const updateBanner = async ({ id, ...data }: any) => {

  return await httpService.patchRequest(`/banner/${id}`, data, {
    auth: true,
    file: true,
  });
};

export const updateProduct = async ({name,...data}: any) => {
  return await httpService.patchRequest(`/product/${name}`, data, {
    auth: true,
    file: true,
  });
};
export const updateCategory = async ({id,...data}: any) => {
  return await httpService.patchRequest(`/category/${id}`, data, {
    auth: true,
    file: true,
  });
};

export const updateBrand = async ({id,...data}: any) => {
  return await httpService.patchRequest(`/brand/${id}`, data, {
    auth: true,
    file: true,
  });
};

export const updateUser = async (data: any) => {};

export const deleteBanner = async (data: any) => {
  return await httpService.deleteRequest(`/banner/${data}`, { auth: true });
};

export const deleteCategory = async (data: any) => {
  return await httpService.deleteRequest(`/category/${data}`, { auth: true });
};

export const deleteProduct = async (data: any) => {
  return await httpService.deleteRequest(`/product/${data}`, { auth: true });
};

export const deleteUser = async (id: any) => {
  return await httpService.deleteRequest(`/users/${id}`, { auth: true });
};

export const deleteBrand = async (data: any) => {
  return await httpService.deleteRequest(`/brand/${data}`, { auth: true });
};


export const getBrandById = async (id: string) => {
  return await httpService.getRequest(`/brand/${id}`, { auth: true });
}
