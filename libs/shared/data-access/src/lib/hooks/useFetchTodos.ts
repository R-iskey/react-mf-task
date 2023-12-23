import { getPlaceholderApi, swrFetcher } from "../helpers";
import { Todo } from "../../types/todo";
import useSWR from "swr";

export function useFetchTodos(page = 1, limit = 10) {
  const { data, error, isLoading } = useSWR<Todo[]>(`${getPlaceholderApi()}/todos?_page=${page}&_limit=${limit}`, swrFetcher)

  return {
    todos: data,
    isLoading,
    isError: error
  }

}
