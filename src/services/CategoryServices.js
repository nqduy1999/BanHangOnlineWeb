import axios from '../untils/axios';

export const findALlCategory = () => {
    return axios({
        method: "GET",
        url: `category/list`
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