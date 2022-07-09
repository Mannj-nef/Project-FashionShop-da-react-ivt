import axionClient from "../untils/axiosClient";

export const getProducts = async () => {
  const { data } = await axionClient.get("product");
  return data;
};
