import { getPlaceholderApi, swrBaseOptions } from "../helpers";
import { Todo } from "../../types/todo";
import useSWR from "swr";

const TODO_SWR_KEY = "api/todo";

/**
 * @see: https://jsonplaceholder.typicode.com/
 * jsonplaceholder api provides 200 todos total and without pagination info
 */
export const TOTAL_TODOS = 200;

export function useTodoApi(page = 1, limit = 15) {
  const fetcher = async ([key, _page, _limit]: [string, number, number]) => {
    const res = await fetch(`${getPlaceholderApi()}/todos?_page=${_page}&_limit=${_limit}`);
    return await res.json();
  };

  const { data = [], error, isLoading, mutate } = useSWR<Todo[]>([TODO_SWR_KEY, page, limit], fetcher, swrBaseOptions());
  const performDelete = (todoId: number) => {
    const optimisticDelete = async () => {
      await fetch(`${getPlaceholderApi()}/todos/${todoId}`, {
        method: "DELETE"
      });

      return data.filter(t => t.id !== todoId);
    };

    mutate(optimisticDelete, {
      optimisticData: data.filter(t => t.id !== todoId),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    });
  };
  const postTodo = (title: string) => {
    const todo = {
      id: 0,
      title,
      userId: 1,
      completed: false
    };

    const optimisticPost = async () => {
      const res = await fetch(`${getPlaceholderApi()}/todos`, {
        method: "POST",
        body: JSON.stringify(todo)
      });

      const { id } = await res.json();

      return [{ ...todo, id }, ...data];
    };

    mutate(optimisticPost, {
      optimisticData: [todo, ...data],
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    });
  };
  const performUpdate = (id: number, todo: Partial<Todo>) => {

    const updatedTodos = data.map(el => {
      if (el.id === id) {
        return { ...el, ...todo };
      }
      return el;
    });

    const optimisticUpdate = async () => {
      await fetch(`${getPlaceholderApi()}/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify(todo)
      });

      return updatedTodos;
    };

    mutate(optimisticUpdate, {
      optimisticData: updatedTodos,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    });
  };

  return {
    todos: data,
    performDelete,
    performUpdate,
    postTodo,
    isLoading,
    isError: error
  };
}
