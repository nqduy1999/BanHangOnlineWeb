import Axios from "axios";

export default class AuthService {
    post = (url, data) => {
        Axios.post(url, data, {headers: { 'Content-Type': 'application/json' }})
        .then(async function (response) {
            return await response;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}