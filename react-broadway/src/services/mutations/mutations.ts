import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/api";

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
