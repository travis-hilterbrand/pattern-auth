import axios from "axios";
import { sleep } from "../utils";
import { queryClient } from "./queryClient";

export type AuthResponse = {
  token: string;
};

export const getAuthToken = async (): Promise<AuthResponse> => {
  await sleep(Math.random() * 1000); // simulate slow network
  const response = await queryClient.fetchQuery({
    staleTime: 5000,
    queryKey: ["auth"],
    queryFn: () => axios.post(`/token`),
  });
  return response.data;
};
