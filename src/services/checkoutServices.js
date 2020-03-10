import axios from "../untils/axios";

const config = {
    "Content-Type": "text/plain"
}
export const getListCity = () => {
    return axios({
        method: "GET",
        url: `diachi/thanhpho`
    })
    .then(async (res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch(async(err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const getListDistrict = (id) => {
    return axios({
        method: "GET",
        url: `diachi/quanhuyen?id=${id}`,
        headers: config
    })
    .then(async (res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch(async(err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}

export const getListWard = (id) => {
    return axios({
        method: "GET",
        url: `diachi/thitran?id=${id}`,
        id,
        headers: config
    })
    .then(async (res) => {
        return {
            data: res.data,
            error: false,
            complete: true
        };
    }).catch(async(err) => {
        return {
            data: null,
            error: true,
            complete: true
        };
    });
}