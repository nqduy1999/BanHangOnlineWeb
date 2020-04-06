let formdata = new FormData()
export const uploadFile = (formdata) => {
    return axios({
        method: "POST",
        url: `file/uploadFile`,
        data:formdata
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

export const downloadFile = (id) => {
    return axios({
        method: "GET",
        url: `file/${id}`
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