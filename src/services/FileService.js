import axios from "../untils/axios";
import Cookies from "js-cookie";
export const uploadFile = (value) => {
    return axios({
        method: "POST",
        url: `file/uploadFile`,
        data: value,
        headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${Cookies.get("authtoken")}`
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