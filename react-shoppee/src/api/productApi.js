import { axiosInstance } from "./axiosInstance";

export const productApi = {
    getAll(params) {
        var url = "/products";
        return axiosInstance.get(url, { params });
    },
    get(id, params) {
        var url = `/products/${id}`;
        return axiosInstance.get(url, { params });
    },
    add(data) {
        var url = `/products`;
        return axiosInstance.post(url, data);
    },
    update(id, data) {
        var url = `/products/${id}`;
        return axiosInstance.put(url, data);
    },
    del(id) {
        var url = `/products/${id}`;
        return axiosInstance.delete(url);
    },
    getNewProducts() {
        var url = "/products/new";
        return axiosInstance.get(url);
    },
    FlashSale() {
        var url = "/products/flash";
        return axiosInstance.get(url);
    },
    getSuggestedProducts() {
        var url = "/products/suggested";
        return axiosInstance.get(url);
    },
};
