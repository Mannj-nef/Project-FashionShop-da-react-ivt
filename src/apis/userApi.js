import axionClient from "../untils/axiosClient";

export const register = async (action) => {
  const { data } = await axionClient.post("login", {
    action,
  });
  return data;
};

export const login = async (action) => {
  const { data } = await axionClient.post("login", {
    action,
  });
  return data;
};
