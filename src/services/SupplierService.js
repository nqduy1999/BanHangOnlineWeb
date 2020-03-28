import axios from "../untils/axios";
import Cookies from "js-cookie";
export const getListSupplier = index => {
    return axios({
      method: "GET",
      url: `supplier/page?index=${index}`
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
  export const addSupplier = value => {
    return axios({
      method: "POST",
      url: `admin/supplier/add`,
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
  export const deleteSupplier = id => {
    return axios({
      method: "POST",
      url: `admin/supplier/delete?id=${id}`
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
  export const updateSupplier = (id, value) => {
    return axios({
      method: "POST",
      url: `admin/supplier/update=${id}`,
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
  export const searchSupplier = (index, keyword) => {
    return axios({
      method: "POST",
      url: `supplier/search?index=${index}&keyword=${keyword}`
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