import axios from '../untils/axios';

export const getALlProduct = (index) => {
    return axios({
        method: "GET",
        url: `product/page?index=${index}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const getProductDetail = (id) => {
    return axios({
        method: "GET",
        url: `product/detail?id=${id}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const getProductByTextSearch = (index, keyword) => {
    return axios({
        method: "GET",
        url: `product/search?index=${index}&keyword=${keyword}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const sortByAsc = (index, fieldSort) => {
    return axios({
        method: "GET",
        url: `product/asc?index=${index}&fieldSort=${fieldSort}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const sortByDesc = (index, fieldSort) => {
    return axios({
        method: "GET",
        url: `product/desc?index=${index}&fieldSort=${fieldSort}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const findAllProductByCategory = (index, name) => {
    return axios({
        method: "GET",
        url: `product/category?index=${index}&name=${name}`
    })
    .then((res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch((err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

