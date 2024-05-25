import axios from "axios";

export const useAxiosAuth = () => {
  const axiosAuth = axios.create({
    baseURL: "https://103.161.8.39:8081/task-ws",
  });

  return axiosAuth;
};
