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
export const addProduct = () =>{
    return axios({
        method: "POST",
        url:`quanly/sanpham/them`
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
export const updateProduct = id =>{
    return axios({
        method:"POST",
        url:`quanly/sanpham/capnhat?id=${id}`,
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