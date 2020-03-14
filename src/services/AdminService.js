import axios from "../untils/axios";

export const getListProduct = () => {
    return axios({
        method: "GET",
        url: `admin/product/list`,
    })
        .then((res) => {
            return {
                data: res.data,
                error: false,
                complete: true
            };

        })
        .catch(() => {
            return {
                data: null,
                error: true,
                complete: true
            }
        })
}
export const removeProduct = (id) =>{
    return axios({
        method: "POST",
        url:`admin/product/delete?id=${id}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
export const addProduct = (value) =>{
    console.log(value);
    return axios({
        method: "POST",
        url:`admin/product/add`,
        data:value
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
export const updateProduct = (id, value) =>{
    return axios({
        method:"POST",
        url:`admin/product/update?id=${id}`,
        data:value
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };

    })
    .catch(() => {
        return {
            data: null,
            error: true,
            complete: true
        }
    })
}
//
export const getListCus = () => {
    return axios({
        method: "GET",
        url: `admin/customer/list`,
    })
        .then((res) => {
            return {
                data: res.data,
                error: false,
                complete: true
            };

        })
        .catch(() => {
            return {
                data: null,
                error: true,
                complete: true
            }
        })
}