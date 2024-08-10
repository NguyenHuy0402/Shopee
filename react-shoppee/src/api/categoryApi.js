import { axiosInstance } from "./axiosInstance";

export const categoryApi = {
    getAll(params) {
        var url = "/categories";
        return axiosInstance.get(url, { params });
    },
    get(id) {
        var url = `/categories/${id}`;
        return axiosInstance.get(url);
    },
};
