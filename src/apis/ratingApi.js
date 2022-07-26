import axiosClient from "../untils/axiosClient";

export const getRatings = async (params) => {
  const { data } = await axiosClient.get("ratings", {
    params: params,
  });
  return data;
};


export const addRating = (rating) => {
  return axiosClient.post(`ratings`, { ...rating });
};
