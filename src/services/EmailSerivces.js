import axios from "../untils/axios";
export const sendEmail = (data) => {
    return axios({
        method: "POST",
        url: `email/send`,
        data
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