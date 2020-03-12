import axios from "../untils/axios";

export const getListProduct = () => {
    return axios({
        method: "GET",
        url: `quanly/sanpham/danhsach`,
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
        url:`quanly/sanpham/xoa?id=${id}`
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
        url:`quanly/sanpham/them`,
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
        url:`quanly/sanpham/capnhat?id=${id}`,
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
        url: `quanly/khachhang/danhsach`,
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