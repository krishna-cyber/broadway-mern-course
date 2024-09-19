import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createBanner,
  createBrand,
  createCategory,
  createProduct,
  createUser,
  deleteBanner,
  deleteBrand,
  deleteCategory,
  deleteProduct,
  deleteUser,
  placeOrder,
  updateBanner,
  updateBrand,
  updateCategory,
  updateProduct,
} from "../api/api";
import { toast } from "react-toastify";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createProduct(data),
    onSettled: (data, error, variables, context) => {
      if (error) {
        toast.error("Error occured creating Product");
      } else {
        toast.success("Product created successfully");
        queryClient.invalidateQueries({
          queryKey: ["productListsForTable"],
        });
      }
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createUser(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating User");
      } else {
        console.log(data);
        toast.success(data?.message);
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
      if (error) {
        console.log("Error occured creating Banner");
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
    mutationFn: (data) => createBrand(data),
    onSettled: (data, error, variables, context) => {
      if (error) {
        toast.error("Error occured creating Brand");
      } else {
        toast.success("Brand created successfully");
        queryClient.invalidateQueries({
          queryKey: ["brandListForTable"],
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

export function useCreateOrder () {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => placeOrder(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating order");
      } else {
        toast.success("Order placed successfully");
        queryClient.invalidateQueries({
          queryKey: ["orderLists"],
        });
      }
    },
  });
}

export function useUpdateParoduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateProduct(data),
    onSettled: async (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured updating product");
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["productLists"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["product", { name: variables?.name }],
        });
      }
    },
  });
}

export function useUpdateUser() {
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

export function useUpdateBanner() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateBanner(data),
    onSettled: async (data, error, variables, context) => {
      if (error) {
        console.log("Error occured updating banner");
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["bannerListsForTable"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["banner", { id: variables?.id }],
        });
      }
    },
  });
}

export function useUpdateBrand() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateBrand(data),
    onSettled: async (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log("Error occured creating product");
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["brandListForTable"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["brand", { id: variables?.id }],
        });
      }
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateCategory(data),
    onSettled: async (data, error, variables, context) => {
      if (error) {
        toast.error("Error occured updating Category");
      } else {
        toast.success("Category updated successfully");
        await queryClient.invalidateQueries({
          queryKey: ["categoryListsForTable"],
        });
        await queryClient.invalidateQueries({
          queryKey: ["category", { id: variables?.id }],
        });
      }
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: string) => deleteProduct(data),
    onSettled: (data, error, variables, context) => {
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
    mutationFn: (id:string) => deleteUser(id),
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
    mutationFn: (data: string) => deleteBanner(data),
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
    mutationFn: (data: number) => deleteBrand(data),
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
    mutationFn: (data: string) => deleteCategory(data),
    onSettled: (data, error, variables, context) => {
      console.log("on settled");
      if (error) {
        console.log(error);
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
