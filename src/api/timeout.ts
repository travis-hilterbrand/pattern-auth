import axios from "axios";

export const getTimeout = async (): Promise<void> => {
  const response = await axios.get("/timeout", { timeout: 5000 });
  return response.data;
};
