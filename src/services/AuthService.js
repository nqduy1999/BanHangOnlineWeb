import Axios from "axios";

import { Cookies, withCookies } from "react-cookie";

class AuthService {
    postWithRoleGuest = async (url, data) => {
        const response  = Axios.post(url, data, {headers: { 'Content-Type': 'application/json' }});
        return await response;
    }
    // để id nếu có id hoặc để null
    getWithRoleGuest = async (url) => {
      const response  = Axios.get(url);
      return await response;
    }
    getWithRoleGuestById = async (url, id) => {
      const response  = Axios.get(url, {id: id});
      return await response;
    }
    postWithRoleMemBer = async (url, data, props) => {
      const {cookies} = props;
      console.log(cookies.get('authtoken'));
      const response  = Axios.post(url, data, {headers: {"Authorization" : `Bearer ${cookies.get('authtoken')}`}});
      return await response;
  }
}
export default AuthService;