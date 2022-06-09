import axiosInstance from "./config";

const URI = "http://localhost:8000";

export const getRequest = endPoint => {
  return axiosInstance.get(URI + endPoint);
};

export const postRequest = (endPoint, data) => {
  return axiosInstance.post(URI + endPoint, data);
};

export const editRequest = (endPoint, data) => {
  return axiosInstance.put(URI + endPoint, data);
};

export const deleteRequest = (endPoint, data) => {
  return axiosInstance.delete(URI + endPoint, { data });
};
