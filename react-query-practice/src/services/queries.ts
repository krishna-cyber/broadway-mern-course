import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchTodo, getTodoIds } from "./api";

export function useTodoIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodoIds,
  });
}

export function userTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => ({
      queryKey: ["post", id],
      queryFn: () => fetchTodo(id!),
      staleTime: Infinity,
    })),
  });
}
