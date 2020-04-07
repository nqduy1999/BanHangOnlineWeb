import axios from "../untils/axios";
export const uploadFile = (value) => {
    return axios({
        method: "POST",
        url: `file/uploadFile`,
        data: value,
        headers: {
            "Content-Type": "multipart/form-data",
         }
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