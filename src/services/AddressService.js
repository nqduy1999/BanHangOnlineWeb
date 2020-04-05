import axios from 'axios';
const config = {
    "Content-Type": "text/plain"
}
const url = "https://api-address-vn.herokuapp.com"
export const getListCity = () => {
    return axios({
        method: "GET",
        url: `${url}/citys`
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
        url: `${url}/districts/${id}`,
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
        url: `${url}/wards/${id}`,
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