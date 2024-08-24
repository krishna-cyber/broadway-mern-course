import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBanner, createCategory, createProduct,createUser, editBanner, editProduct, editUser } from "../api/api";

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
  return useMutation({
    mutationFn: (data) => createUser(data),
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