import { useQuery } from "@tanstack/react-query";
import { User, getUser } from "../api/user";
import { USER_QUERY_KEY } from "./constants";

export const useGetUser = (id: string) => {
  const { data, error, isFetching, isLoading, refetch } = useQuery<User>({
    queryKey: [USER_QUERY_KEY, id],
    queryFn: () => getUser(id),
    retry: 0,
  });
  return { data, error, isFetching, isLoading, refetch };
};
