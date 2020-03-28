import axios from "../untils/axios";
import Cookies from "js-cookie";
export const getListProduct = index => {
  return axios({
    method: "GET",
    url: `product/page?index=${index}`
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
export const removeProduct = id => {
  return axios({
    method: "POST",
    url: `admin/product/delete?id=${id}`
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
export const addProduct = value => {
  return axios({
    method: "POST",
    url: `admin/product/add`,
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
export const updateProduct = (id, value) => {
  return axios({
    method: "POST",
    url: `admin/product/update?id=${id}`,
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
export const getProductDetail = id => {
  return axios({
    method: "GET",
    url: `product/detail?id=${id}`
  })
    .then(res => {
      return {
        data: res.data,
        error: false,
        complete: true
      };
    })
    .catch(err => {
      return {
        data: null,
        error: true,
        complete: true
      };
    });
};
export const searchProduct = (key, index) => {
  return axios({
    method: "GET"
  });
};
//
export const getListCus = () => {
  return axios({
    method: "GET",
    url: `admin/customer/list`,
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
export const getDetailCus = username => {
  return axios({
    method: "GET",
    url: `customer/detail?username=${username}`,
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
export const updateCus = (username, value) => {
  return axios({
    method: "POST",
    url: `customer/update?username=${username}`,
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
//Order
export const getListOrderByUsername = username => {
  return axios({
    method: "GET",
    url: `order/list?username=${username}`,
    headers: { Authorization: `Bearer ${Cookies.get("authtoken")}` }
  })
    .then(res => {
      return {
        data: res.data,
        error: false,
        complete: true
      };
    })
    .catch(err => {
      return {
        data: null,
        error: true,
        complete: true
      };
    });
};
//Supplier
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
    url: `admin/supplier/delete${id}`
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
//Category
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
    url: `admin/category/delete${id}`
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
    url: `admin/category/update=${id}`,
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
export const searchCategory = (index, keyword) => {
  return axios({
    method: "POST",
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
