import { useQuery } from "@tanstack/react-query";
import { getTimeout } from "../api/timeout";
import { useEffect } from "react";
import { AxiosError } from "axios";

export const useGetTimeout = () => {
  const { data, error, isFetching, isLoading, refetch } = useQuery<void>({
    enabled: true,
    queryKey: ["TIMEOUT"],
    queryFn: () => getTimeout(),
    retry: 0,
  });

  useEffect(() => {
    const axiosError = error as AxiosError;
    if (axiosError) {
      console.error("RQ timeout", error);
      if (axiosError.code === "ECONNABORTED") {
        console.error("RQ ABORT");
      }
    }
  }, [error]);
  useEffect(() => {
    // manual call
    getTimeout().catch((error: AxiosError) => {
      console.error("MANUAL timeout", error);
      if (error.code === "ECONNABORTED") {
        console.error("MANUAL ABORT");
      }
    });
  }, []);
  return { data, error, isFetching, isLoading, refetch };
};
