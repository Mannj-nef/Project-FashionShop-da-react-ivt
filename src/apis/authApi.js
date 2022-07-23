import axionClient from "../untils/axiosClient";

export const logIn = async (action) => {
  const { data } = await axionClient.post("users", {
    action,
  });
  return data;
};

export const getUser = async (action) => {
  const { data } = await axionClient.get("users");
  return data;
};
