import Axios from "axios";
export default Axios.create({
    // baseURL: "https://api-vpponline.herokuapp.com/api/v1/"
    baseURL: "http://localhost:8080/api/v1/"
})
