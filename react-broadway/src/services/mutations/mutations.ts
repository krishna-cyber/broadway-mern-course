import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBanner, createCategory, createProduct,createUser, deleteBanner, deleteBrand, deleteCategory, deleteProduct, deleteUser, editBanner, editCategory, editProduct, editUser } from "../api/api";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createProduct(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const Navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => createUser(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        console.log(data)
        Navigate('/admin/user-lists')
        toast.success(data?.message)
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }
    },
  });
}

export function useCreateBanner() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createBanner(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}
export function useCreateBrand() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createBanner(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createCategory(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["categoryListsForTable"],
        });
      }
    },
  });
}


export function useEditProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => editProduct(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}

export function useeditUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => editUser(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }
    },
  });
}

export function useeditBanner() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => editBanner(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}


export function useeditBrand() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => editBanner(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}

export function useeditCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => editCategory(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        toast.error("Error occured updating Category");
      } else {
        toast.success("Category updated successfully");
        queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
      }
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => deleteProduct(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        toast.error("Error occured deleting product");
      } else {
        toast.success("Product deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["productListsForTable"],
        });
      }
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => deleteUser(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        toast.error("Error occured deleting User");
      } else {
        toast.success("User deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      }
    },
  });
}

export function useDeleteBanner() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:string) => deleteBanner(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        toast.error("Error occured deleting Banner");
      } else {
        toast.success("Banner deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["bannerListsForTable"],
        });
      }
    },
  });
}


export function useDeleteBrand() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:number) => deleteBrand(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        toast.error("Error occured deleting Brand");
      } else {
        toast.success("Brand deleted successfully");
        queryClient.invalidateQueries({
          queryKey: ["brandListForTable"],
        });
      }
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:string) => deleteCategory(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log (error)
        toast.error("Error occured deleting Category");
      } else {
        toast.success(data?.message);
        queryClient.invalidateQueries({
          queryKey: ["categoryListsForTable"],
        });
      }
    },
  });
}