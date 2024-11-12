import axios from "axios";
import { sleep } from "../utils";

export type User = {
  id: string;
  color: string;
  name: string;
};

export const getUser = async (id: string): Promise<User> => {
  await sleep(300); // simulate slow network
  const response = await axios.get(`/users/${id}`);
  return response.data;
};
