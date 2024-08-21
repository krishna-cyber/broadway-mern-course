import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/api";

const queryClient = useQueryClient();
export function useCreateProduct() {
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
 ]
}
