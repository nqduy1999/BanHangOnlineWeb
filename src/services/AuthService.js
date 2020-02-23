import Axios from "axios";

import Cookies from 'js-cookie';
class AuthService {
    postWithRoleGuest = async (url, data) => {
        const response  = Axios.post(url, data);
        return await response;
    }
    // ko có get bởi vì cần phải huỷ axios s khi get
    postWithRoleMemBer = async (url, data) => {
      const response  = Axios.post(url, data, {headers: {"Authorization" : `Bearer ${Cookies.get('authtoken')}`}});
      return await response;
  }
}
export default AuthService;