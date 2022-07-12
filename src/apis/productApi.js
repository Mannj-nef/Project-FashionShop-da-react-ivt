import axiosClient from "../untils/axiosClient";

export const getProducts = async () => {
  const { data } = await axiosClient.get("products");
  return data;
};

export const deleteProductById = (id) => {
	return axiosClient.delete(`products/${id}`);
};
export const addProduct = (product) => {
	return axiosClient.post(`products`,{...product});
};