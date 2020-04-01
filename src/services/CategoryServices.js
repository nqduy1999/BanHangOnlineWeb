import axios from "../untils/axios";
import Cookies from "js-cookie";
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
export const ListCategory = () => {
  return axios({
    method: "GET",
    url: `category/list`
  })
    .then(res => {
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
      };
    });
};
export const getListCategory = index => {
    return axios({
      method: "GET",
      url: `category/page?index=${index}`
    })
      .then(res => {
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
        };
      });
  };
  export const addCategory = value => {
    return axios({
      method: "POST",
      url: `admin/category/add`,
      data: value
    })
      .then(res => {
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
        };
      });
  };
  export const deleteCategory = id => {
    return axios({
      method: "POST",
      url: `admin/category/delete?id=${id}`
    })
      .then(res => {
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
        };
      });
  };
  export const updateCategory = (id, value) => {
    return axios({
      method: "POST",
      url: `admin/category/update?id=${id}`,
      data: value,
      headers: { Authorization: `Bearer ${Cookies.get("authtoken")}` }
    })
      .then(res => {
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
        };
      });
  };
  export const detailCategory = (id) => {
    return axios({
      method: "GET",
      url: `category/detail?id=${id}`,
    })
      .then(res => {
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
        };
      });
  };
  export const searchCategory = (index, keyword) => {
    return axios({
      method: "GET",
      url: `category/search?index=${index}&keyword=${keyword}`
    })
      .then(res => {
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
        };
      });
  };
  