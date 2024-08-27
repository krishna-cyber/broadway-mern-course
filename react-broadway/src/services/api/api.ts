import httpService from "../http.service";

export const getLandingPageBanner = async () => {
  return await httpService.getRequest("/banner/list-home");
}

export const getProductsForTable = async (page:number,limit:number) => {
  return await httpService.getRequest(`/product?page=${page}&limit=${limit}`);
};

export const countTotalProducts = async () => {
  return await httpService.getRequest("/product/count");
};

export const getproductsForLandingPage = async () => {
  return await httpService.getRequest("/product/list-home");
};

export const createProduct = async (data: any) => {
  console.log(data);
  return await httpService.postRequest("/product/create-product", {
    auth: true,
    file: true,
  });
};

export const createCategory = async (data: any) => {
  console.log(data);
  return await httpService.postRequest("/category", data,{
    auth: true,
    file: true,
  });
};
export const getBannersForTable = async (page:number,limit:number) => {
  return await httpService.getRequest(`/banner?page=${page}&limit=${limit}`, { auth: true });
};

export const getUsersForTable = async () => {
  return await httpService.getRequest("/users", { auth: true });
};

export const getBrandsForTable = async (page:number,limit:number) => {
  return await httpService.getRequest(`/brand?page=${page}&limit=${limit}`,{auth:true});
};
export const getCategoryForTable = async (page:number =1,limit:number=5) => {
  return await httpService.getRequest(`/category?page=${page}&limit=${limit}`,{auth:true});
};

export const createUser = async (data: any) => {
   return await httpService.postRequest("/users/create-user",data, {auth:true,file:true});
};

export const createBanner = async (data: any) => {
  return await httpService.postRequest("/banner",data, {auth:true,file:true});
};

export const editBanner = async (data: any) => {}

export const editProduct = async (data: any) => {}
export const editCategory = async (data: any) => {}

export const editUser = async (data: any) => {}

export const deleteBanner = async (data: any) => {
  return await httpService.deleteRequest(`/banner/${data}`, { auth: true });
}

export const deleteCategory = async (data: any) => {
  return await httpService.deleteRequest(`/category/${data}`, { auth: true });
}

export const deleteProduct = async (data: any) => {
  return await httpService.deleteRequest(`/product/${data}`, { auth: true });
}

export const deleteUser = async (data: any) => {
  return await httpService.deleteRequest(`/users/${data}`, { auth: true });
}

export const deleteBrand = async (data: any) => {
  return await httpService.deleteRequest(`/brand/${data}`, { auth: true });
}