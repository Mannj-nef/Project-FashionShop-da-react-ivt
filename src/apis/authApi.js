import axionClient from "../untils/axiosClient";

export const register = async (action) => {
  const { data } = await axionClient.post("login", {
    action,
  });
  return data;
};

export const logIn = async (action) => {
  console.log(action, "asdasdsad");
  //   const { data } = await axionClient.post("users", {
  //     action,
  //   });
  //   return data;
};

export const getUser = async (action) => {
  console.log(action, "getuser");
  const { data } = await axionClient.get("users", {
    action,
  });
  return data;
};
