import Axios from "axios";
export default Axios.create({
    baseURL: "http://api-vpponline.herokuapp.com/api/v1/"
})