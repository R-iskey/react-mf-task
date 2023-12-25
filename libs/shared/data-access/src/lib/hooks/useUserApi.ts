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
  userId?: string;
}

const USER_SWR_KEY = "api/user";

/**
 * @see: https://jsonplaceholder.typicode.com/
 * jsonplaceholder api provides 10 users total and without pagination info
 */
export const TOTAL_USERS = 10;

export function useUserApi(options: IUserApiOptions) {
  const fetcher = async ([, params]: [string, IUserApiOptions]) => {
    const { page = 1, limit = 15, search, sort, sortDir, userId } = params;

    const url = new URL(`${getPlaceholderApi()}/users`);
    const { searchParams: sp } = url;

    if (userId) {
      sp.append("id", userId);

      const res = await fetch(url);
      return await res.json();
    }

    if (search) {
      sp.append("name", search);
    }

    if (sort) {
      sp.append("_sort", sort);
      sp.append("_order", sortDir ? sortDir : "asc");
    }

    sp.append("_page", String(page));
    sp.append("_limit", String(limit));


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
