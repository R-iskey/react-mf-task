import { getPlaceholderApi, swrBaseOptions } from "../helpers";
import { User } from "../../types/user";
import useSWR from "swr";
import { Order } from "../../types/common/order";

interface IUserApiOptions {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  sortDir?: Order;
}

const USER_SWR_KEY = "api/user";

/**
 * @see: https://jsonplaceholder.typicode.com/
 * jsonplaceholder api provides 10 users total and without pagination info
 */
export const TOTAL_USERS = 10;

export function useUserApi(options: IUserApiOptions) {
  const fetcher = async ([key, {page = 1, limit = 15, search, sort, sortDir}]: [string, IUserApiOptions]) => {
    const url = new URL(`${getPlaceholderApi()}/users`);
    if (search) {
      url.searchParams.append("name", search);
    }
    if (sort) {
      url.searchParams.append("_sort", sort);
      url.searchParams.append("_order", sortDir ? sortDir : 'asc');
    }

    url.searchParams.append('_page', String(page));
    url.searchParams.append('_limit', String(limit));

    const res = await fetch(url);
    return await res.json();
  };

  const {
    data = [],
    error,
    isLoading,
    mutate
  } = useSWR<User[]>([USER_SWR_KEY, options], fetcher, swrBaseOptions());

  const performDelete = (id: number) => {
    const optimisticDelete = async () => {
      await fetch(`${getPlaceholderApi()}/users/${id}`, {
        method: "DELETE"
      });

      return data.filter(t => t.id !== id);
    };

    mutate(optimisticDelete, {
      optimisticData: data.filter(u => u.id !== id),
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    });
  };

  return {
    users: data,
    performDelete,
    isLoading,
    isError: error
  };
}
