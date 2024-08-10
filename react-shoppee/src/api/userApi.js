import { axiosInstance } from "./axiosInstance";

export const userApi = {
    register(data) {
        var url = "/Common/local/registe";
        return axiosInstance.post(url, data);
    },
    login(data) {
        var url = "/Common/local";
        return axiosInstance.post(url, data);
    },
    me(params) {
        var url = "/users/me";
        return axiosInstance.get(url, { params });
    },
};
