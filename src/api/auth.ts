import axios from "axios";
import { sleep } from "../utils";

export type AuthResponse = {
  token: string;
};

export const getAuthToken = async (): Promise<AuthResponse> => {
  await sleep(Math.random() * 1000); // simulate slow network
  const response = await axios.post(`/token`);
  return response.data;
};
