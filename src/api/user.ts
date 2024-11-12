import { sleep } from "../utils";

export type User = {
  id: string;
  color: string;
  name: string;
};

export const getUser = async (id: string): Promise<User> => {
  await sleep(300); // simulate slow network
  const response = await fetch(`/users/${id}`);
  return response.json();
};
